export type SortRepositoryParams = 'forks' | 'stars' | 'updated';

export type OrderRepositoryParams = 'desc' | 'asc';

export type ParamSearchRepositoryType = {
    q: string;
    per_page?: number;
    page?: number;
    order?: OrderRepositoryParams;
    sort?: SortRepositoryParams;
};
