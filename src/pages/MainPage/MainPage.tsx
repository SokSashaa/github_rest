import {FC, useState} from "react";
import css from './mainPage.module.sass'
import TableResult from "../../components/TableResult/TableResult";
import {useAppSelector} from "../../redux/redux-hooks";
import {initialItemRepType, ItemRepType} from "../../api/api";
import cn from 'classnames'

const MainPage: FC = () => {
    const items = useAppSelector(state => state.reps)
    const [activeItem,setActiveItem] = useState<ItemRepType>(initialItemRepType)
    return (
        <main className={css.root}>
            <div>
                <h3>Результаты поиска</h3>
                <div className={css.leftPart}>
                    <TableResult items={items} setActiveRow={setActiveItem}/>
                </div>
            </div>
            <div className={cn(css.rightPart,activeItem.id===''?css.noActive:css.activeRow)} >
                {
                    activeItem.id===''?<p>Выберите репозиторий</p>:
                        <div className={css.activeRow}>
                            <h3>{activeItem.name}</h3>
                            <p>{activeItem.description}</p>
                            <p>{activeItem.license}</p>
                        </div>
                }

            </div>
        </main>
    )
}
export default MainPage