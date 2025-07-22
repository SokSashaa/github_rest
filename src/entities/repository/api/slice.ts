import dayjs from 'dayjs';

import { ParamSearchRepositoryType } from '@entities/repository/api/types';

import { apiSlice } from '@shared/lib/slices/apiSlice';

import { Repository } from '../model/repository';

type RepositoryResponse = {
    items: Repository[];
    total_count: number;
    incomplete_results?: boolean;
};

/***
 Подключаем конечные точки к нашему Api. В данном случае происходит отправка запроса, получение ответа,
 который изменяем в наш тип. Результат кэшируем
 ***/

export const repositoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchRepository: builder.query<
            RepositoryResponse,
            ParamSearchRepositoryType
        >({
            query: (params) => ({
                url: '/search/repositories',
                params: params,
            }),
            transformResponse: (data: RepositoryResponse) => {
                return {
                    items: data.items.map((value: any) => ({
                        id: value.id,
                        name: value.name,
                        forks: value.forks_count,
                        language: value.language,
                        stars: value.stargazers_count,
                        updated: dayjs(value.updated_at).format(
                            'DD.MM.YYYY',
                        ),
                        description: value.description,
                        license: value.license?.name,
                        topics: value.topics,
                    })),
                    total_count: data.total_count,
                };
            },
            providesTags: ['Repositories'],
        }),
    }),
});

//Хуки, чтобы работать с RTK
export const { useSearchRepositoryQuery, useLazySearchRepositoryQuery } =
    repositoryApiSlice;
