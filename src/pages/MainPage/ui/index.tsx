import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { INITIAL_REPOSITORY } from '@pages/MainPage/config/initialRepository';

import TableResult from '@features/TableResult/ui';

import { useSearchRepositoryQuery } from '@entities/repository/api/slice';
import { Repository } from '@entities/repository/model/repository';

import Spinner from '@shared/ui/Spinner/Spinner';
import { SpinnerSize } from '@shared/ui/Spinner/types';

import ActiveRow from './ActiveRow/ActiveRow';

import css from './mainPage.module.sass';

const MainPage: FC = () => {

    //Получаем данные из localStorage
    const searchParam = localStorage.getItem('search') || '';

    //Отправляем запрос
    const {
        data: items,
        isFetching,
    } = useSearchRepositoryQuery(searchParam);

    const [activeItem, setActiveItem] =
        useState<Repository>(INITIAL_REPOSITORY);

    //Проверка на то, что строка таблицы еще не выбрана
    const isNotSelectRow = activeItem.id === '';

    return (
        <main className={css.root}>
            <div className={css.leftPart}>
                <h3 className={css.title}>Результаты поиска</h3>
                <div className={css.tableResult}>
                    {!isFetching && items ? (
                        <TableResult
                            key="TableData"
                            items={items}
                            onClickRow={setActiveItem}
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
