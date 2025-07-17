import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Базовый URL для api
const BASE_URL = 'https://api.github.com';

//Создание и конфигурация нашего API
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: () => ({}),
    tagTypes: ['Repositories'],
});
