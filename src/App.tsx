import React, {useState} from 'react';
import Header from "./components/Header/Header";
import StartPage from "./pages/StartPage/StartPage";
import MainPage from "./pages/MainPage/MainPage";

export enum pagesEnum {
    firstPage,
    mainPage

}

function App() {
    const [page, setPage] = useState(pagesEnum.firstPage)
    return (
        <div className="App">
            <Header setPage={setPage}/>
            {page === pagesEnum.firstPage ? <StartPage/> : <MainPage/>}

        </div>
    );
}

export default App;
