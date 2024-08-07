import axios from "axios";
import dayjs from "dayjs";

export type ItemRepType = { //Тип итема для хранения информации о реп-и
    id:string,
    name:string,
    forks_count:number,
    language:string,
    stargazers_count:number,
    updated_at:string,
    license:string,
    description:string
}

export const initialItemRepType = { // начальное значение данного типа
    id:'',
    name:'',
    forks_count:0,
    language:'',
    stargazers_count:0,
    updated_at:'',
    license:'',
    description:''
}

export const getReps = async (part:string)=>{ //метод для получения из запроса итемов нашего типа
    const result = await axios.get(`https://api.github.com/search/repositories?q=${part}`).then((req:any)=>{
       return req.data.items.map((value:any) =>{
           return {
               id:value.id,
               name:value.name,
               forks_count:value.forks_count,
               language:value.language,
               stargazers_count:value.stargazers_count,
               updated_at:dayjs(value.updated_at).format('DD.MM.YYYY'),
               description:value.description,
               license:value.license?.name
           }
       })
    })
    return result
}