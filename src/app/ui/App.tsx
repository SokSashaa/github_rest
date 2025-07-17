import { useState } from 'react';

import MainPage from '@pages/MainPage/ui';
import StartPage from '@pages/StartPage/ui';

import Header from '@features/Header/ui';

import { PagesEnum } from '@shared/config/types';

function App() {
    const [page, setPage] = useState(PagesEnum.FIRST_PAGE);

    return (
        <div className="App">
            <Header onClickSearch={setPage} />
            {page === PagesEnum.FIRST_PAGE ? <StartPage /> : <MainPage />}
        </div>
    );
}

export default App;
