import { Item } from "../types/Item";

export const getCurrentMonth = () =>{
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMouth = (list:Item[], date:string): Item[] =>{
    let newList:Item[] = []
    let [year, month] = date.split('-')                                //desistruturação para facilitar

        for(let i in list){
            if(list[i].date.getFullYear() === parseInt(year) &&        //Verificar se o mês bate para enviar o item para uma lista
            (list[i].date.getMonth() +1) === parseInt(month)           //Filtrada. (+1 pq o mês começa no 0)
            ){
                newList.push(list[i])                                  //Cria uma lista filtrada baseado no mês/ano
            }
        }
    return newList
}

export const formatDate = (date:Date) =>{
    let year = date.getFullYear();
    let month = date.getMonth() + 1 
    let day = date.getDate()

    
    

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

const addZeroToDate = (n:number) =>{
    if(n < 10 ){
        return `0${n}`
    }else{
        return `${n}`
    }
}


export const formatCurrentMonth = (currentMonth: string) =>{
    let [year,month] = currentMonth.split('-')
    let months =['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${months[parseInt(month) -1 ]} de ${year}` 
}