//Тип репозитория, который получаем с нашего GitHub REST API

export type Repository = {
    id:string,
    name:string,
    forks:number,
    language:string,
    stars:number,
    updated:string,
    license:string,
    description:string,
    topics: string[]
}
