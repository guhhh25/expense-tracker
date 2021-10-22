import { formatCurrentMonth, getCurrentMonth } from '../../helpers/dateFilter'
import * as C from './styles'
import { ResumeItem } from '../ResumeItem'


type Props = {
    currentMonth:string 
    onMonthChange: (newMonth:string) => void
    income: number
    expense:number
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) =>{

    const HandlePrevMonth = () =>{
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        currentDate.setMonth(currentDate.getMonth() -1)
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() +1}`)

    }

    const HandleNextMonth = () =>{
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        currentDate.setMonth(currentDate.getMonth() +1)
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() +1}`)
    }

    return (
        <C.Container>
            <C.MonthArea>
            <C.MonthArrow onClick={HandlePrevMonth}>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
            <C.MonthArrow onClick={HandleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
            <ResumeItem title="Receitas" value={income}/>
            <ResumeItem title="Despesas" value={expense}/>
            <ResumeItem title="Balanço" value={income - expense} color={(income - expense) < 0 ? 'red' : 'green'} />
            </C.ResumeArea>
        </C.Container>
    )
}