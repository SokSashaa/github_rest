import { Repository } from '@entities/repository/model/repository';

// начальное значение типа Repository
export const INITIAL_REPOSITORY: Repository = {
    id: '',
    name: '',
    forks_count: 0,
    language: '',
    stargazers_count: 0,
    updated_at: '',
    license: '',
    description: '',
    topics: [],
};
