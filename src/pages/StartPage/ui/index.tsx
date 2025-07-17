import  {FC} from 'react';

import css from './startPage.module.sass';

const StartPage:FC = ()=>{
    return (
        <main className={css.main}>
            <h1 className={css.title}>Добро пожаловать</h1>
        </main>
    )
}
export default StartPage
