import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';

import { INITIAL_REPOSITORY } from '@pages/MainPage/config/initialRepository';

import TableResult from '@features/TableResult/ui';

import { useSearchRepositoryQuery } from '@entities/repository/api/slice';
import {
    OrderRepositoryParams,
    ParamSearchRepositoryType,
    SortRepositoryParams,
} from '@entities/repository/api/types';
import { Repository } from '@entities/repository/model/repository';

import Spinner from '@shared/ui/Spinner/Spinner';
import { SpinnerSize } from '@shared/ui/Spinner/types';

import ActiveRow from './ActiveRow/ActiveRow';

import css from './mainPage.module.sass';

const PAGE_SIZE = 5;

const MainPage: FC = () => {
    //Храним модель сортировки колонок
    const [sortModel, setSortModel] = useState<GridSortModel>([]);

    //храним модель пагинации
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: PAGE_SIZE,
    });

    //Храним параметры для поиска
    const [searchParams, setSearchParams] = useState<ParamSearchRepositoryType>(
        {
            q: localStorage.getItem('search') || '', // значение по которому ищем
            page: paginationModel.page + 1 /* номер страницы. +1 т.к GitHubApi возвращает страницы, начиная с 1, а DataGrid с 0*/,
            per_page: paginationModel.pageSize, // количество записей на странице
            sort: sortModel[0]?.field as SortRepositoryParams, // по какому параметру сортировка
            order: sortModel[0]?.sort as OrderRepositoryParams, // как сортируем
        },
    );

    //Отправляем запрос
    const { data, isFetching } = useSearchRepositoryQuery(searchParams);

    const [activeItem, setActiveItem] =
        useState<Repository>(INITIAL_REPOSITORY);

    //Проверка на то, что строка таблицы еще не выбрана
    const isNotSelectRow = activeItem.id === '';

    useEffect(() => {
        setSearchParams((prevState) => {
            const baseParams = {
                ...prevState,
                page: paginationModel.page + 1,
                per_page: paginationModel.pageSize,
            }

            if (sortModel.length < 1) {
                const { sort, order, ...newState } = baseParams;

                return newState;
            }

            return {
                ...baseParams,
                sort: sortModel[0]?.field as SortRepositoryParams,
                order: sortModel[0]?.sort as OrderRepositoryParams,
            };
        });
    }, [paginationModel, sortModel]);

    const handlePaginationModelChange = (newModel: GridPaginationModel) => {
        setPaginationModel(newModel);
    };

    const handleSortModelChange = (newModel: GridSortModel) => {
        setSortModel(newModel);
    };

    return (
        <main className={css.root}>
            <div className={css.leftPart}>
                <h3 className={css.title}>Результаты поиска</h3>
                <div className={css.tableResult}>
                    {!isFetching && data ? (
                        <TableResult
                            key="TableData"
                            items={data.items}
                            rowCount={data.total_count}
                            paginationModel={paginationModel}
                            sortModel={sortModel}
                            onClickRow={setActiveItem}
                            onSortModelChange={handleSortModelChange}
                            onPaginationModelChange={
                                handlePaginationModelChange
                            }
                        />
                    ) : (
                        <Spinner
                            key="LoaderData"
                            size={SpinnerSize.LARGE}
                        />
                    )}
                </div>
            </div>
            <div
                className={cn(
                    css.rightPart,
                    isNotSelectRow ? css.noActive : css.activeRow,
                )}
            >
                {isNotSelectRow ? (
                    <p key="NoActiveText">Выберите репозиторий</p>
                ) : (
                    <ActiveRow
                        key="ActiveRow"
                        item={activeItem}
                    />
                )}
            </div>
        </main>
    );
};
export default MainPage;
