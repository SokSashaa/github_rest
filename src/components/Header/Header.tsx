import React, {FC, useEffect, useState} from "react";
import css from './header.module.sass'
import {Button} from "@mui/material";
import {useDebounce} from "../../hooks/useDebounce";
import {getReps} from "../../api/api";
import {useAppDispatch} from "../../redux/redux-hooks";
import {addItems} from "../../redux/slices/repsSlice";
import {pagesEnum} from "../../App";

type HeaderProps = {
    setPage?: (item: pagesEnum) => void
}

const Header: FC<HeaderProps> = ({
                                     setPage = () => {}
                                 }) => {
    const [value, setValue] = useState('')
    const valueDebounce = useDebounce(value, 600);

    const dispatch = useAppDispatch() // получаем dispatch

    useEffect(() => {
        if (valueDebounce !== '') getReps(valueDebounce).then(items => dispatch(addItems(items))) //  при ререндере отправляем запрос и помещаем итемы в стор
    }, [valueDebounce]);
    const onChange: React.ComponentProps<'input'>['onChange'] = (event) => {
        setValue(event.target.value) //функция для смены состояния для инпута
    }
    return (
        <div className={css.header}>
            <input onChange={(value => onChange(value))} placeholder={'Введите поисковой запрос'}/>
            <Button id={css.foundButton} variant="contained" onClick={()=>setPage(pagesEnum.mainPage)}>Искать</Button>
        </div>
    )
}
export default Header