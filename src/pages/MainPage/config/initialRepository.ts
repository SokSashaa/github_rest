import { Repository } from '@entities/repository/model/repository';

// начальное значение типа Repository
export const INITIAL_REPOSITORY: Repository = {
    id: '',
    name: '',
    forks: 0,
    language: '',
    stars: 0,
    updated: '',
    license: '',
    description: '',
    topics: [],
};
