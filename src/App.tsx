import {useState, useEffect} from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { items } from './data/items'
import {getCurrentMonth, filterListByMouth} from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'


const App = () =>{

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)



  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  useEffect(() =>{
    setFilteredList(filterListByMouth(list, currentMonth)) // A 'date' esta em CurrentMonth
  }, [list, currentMonth]);


  useEffect(() =>{
    let income = 0
    let expense = 0

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        income += filteredList[i].value
        
      }else{
        expense += filteredList[i].value
      }
    }

    setIncome(income)
    setExpense(expense)

  }, [filteredList])

  const handleMonthChange = (newMonth:string) =>{
    setCurrentMonth(newMonth)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.body>

        <InfoArea currentMonth={currentMonth}
                  onMonthChange={handleMonthChange}
                  income={income}
                  expense={expense}   />
                  

                  <InputArea onAdd={handleAddItem} />
                  
      
        <TableArea list= {filteredList}></TableArea>
      </C.body>
    </C.Container>
  );
}


export default App;