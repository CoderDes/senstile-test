import {useState, useEffect} from 'react';

import { ProductList } from '../Products/List'; 
import { Pagination } from '../Pagination';
import { CARDS_PER_PAGE } from '../../constants/pagination';
import { URL_API } from '../../constants/api';


import '../styles.css';
import './styles.css';


export const Main = ({horizontalShowMode, chooseCard}) => {
    const [shortProds, setShortProds] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(CARDS_PER_PAGE.standard);
    const [prodsByPage, setProdsByPage] = useState(shortProds);

    const calcPagesCount = () => {
        return Math.ceil(shortProds.length / cardsPerPage);
    }
    const [pagesCount, setPagesCount] = useState(calcPagesCount());


    useEffect(() => {
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        setProdsByPage(shortProds.slice(indexOfFirstCard, indexOfLastCard));
        setPagesCount(calcPagesCount());
    }, [currentPage, cardsPerPage, shortProds.length]);
    
    useEffect(() => {
        fetch(`${URL_API}/short-description`)
            .then(response => response.json())
            .then(data => setShortProds(data))
            .catch(err => console.error(err));
    }, []);


    return (
        <main className="main">
            <ProductList prods={prodsByPage} horizontalShowMode={horizontalShowMode} chooseCard={chooseCard}/>
            <Pagination                 
                currentPage={currentPage}
                pagesCount={pagesCount}
                cardsPerPage={cardsPerPage}
                updateCardsCountPerPage={setCardsPerPage}
                setCurrentPage={setCurrentPage}
            />
        </main>
    );
}