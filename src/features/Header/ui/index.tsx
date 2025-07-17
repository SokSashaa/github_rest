import { ComponentProps, FC, KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import { PagesEnum } from '@shared/config/types';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { apiSlice } from '@shared/lib/slices/apiSlice';

import css from './header.module.sass';

//Интерфейс пропсов header(шапки). Принимает функцию для работы при клике на кнопку поиска
interface HeaderProps {
    onClickSearch: (page: PagesEnum) => void;
}

const Header: FC<HeaderProps> = ({ onClickSearch }) => {
    //поле, чтобы отслеживать input
    const [value, setValue] = useState('');

    //debounce поле, чтобы не выполнять логику на каждое нажатие
    const valueDebounce = useDebounce(value, 600);

    const dispatch = useDispatch();

    //следим за debounce значением, только после его смены записываем в localStorage
    //можно было использовать react context, хранилище redux, была бы библиотека react-router,
    // то можно было бы использовать контекст router или добавить переход по страницам
    useEffect(() => {
        if (valueDebounce !== '') {
            localStorage.setItem('search', valueDebounce);
        }
    }, [valueDebounce]);

    //функция для смены значения input
    const handleChange: ComponentProps<'input'>['onChange'] = (event) => {
        setValue(event.target.value); //функция для смены состояния для инпута
    };

    //функция по клику на кнопку "найти". Обнуляем кэш rtk
    const handleClick = () => {
        dispatch(apiSlice.util.invalidateTags(['Repositories']));
        onClickSearch(PagesEnum.MAIN_PAGE);
    };

    const handleClickDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleClick();
        }
    };

    return (
        <div className={css.header}>
            <input
                placeholder={'Введите поисковой запрос'} // по-хорошему лучше использовать библиотеку по типу i18n для перевода, но это не по ТЗ
                className={css.search}
                onChange={(value) => handleChange(value)}
                onKeyDown={handleClickDown}
            />
            <Button
                id={css.foundButton}
                variant="contained"
                onClick={handleClick}
            >
                Искать
            </Button>
        </div>
    );
};
export default Header;
