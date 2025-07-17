//Тип репозитория, который получаем с нашего GitHub REST API

export type Repository = {
    id:string,
    name:string,
    forks_count:number,
    language:string,
    stargazers_count:number,
    updated_at:string,
    license:string,
    description:string,
    topics: string[]
}
