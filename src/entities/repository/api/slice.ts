import dayjs from 'dayjs';

import { apiSlice } from '@shared/lib/slices/apiSlice';

import { Repository } from '../model/repository';

type RepositoryResponse = {
    items: Repository[];
    incomplete_results: boolean;
    total_count: number;
};

/***
    Подключаем конечные точки к нашему Api. В данном случае происходит отправка запроса, получение ответа,
 который изменяем в наш тип. Результат кэшируем
 ***/

export const repositoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchRepository: builder.query<Repository[], string>({
            query: (partName) => ({
                url: '/search/repositories',
                params: { q: partName },
            }),
            transformResponse: (data: RepositoryResponse) => {
                return data.items.map((value: any) => {
                    return {
                        id: value.id,
                        name: value.name,
                        forks_count: value.forks_count,
                        language: value.language,
                        stargazers_count: value.stargazers_count,
                        updated_at: dayjs(value.updated_at).format(
                            'DD.MM.YYYY',
                        ),
                        description: value.description,
                        license: value.license?.name,
                        topics: value.topics,
                    };
                });
            },
            providesTags: ['Repositories'],
        }),
    }),
});

//Хуки, чтобы работать с RTK
export const { useSearchRepositoryQuery, useLazySearchRepositoryQuery } =
    repositoryApiSlice;
