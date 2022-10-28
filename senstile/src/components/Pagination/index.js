import { Button } from '../../containers/Button';

import { CARDS_PER_PAGE } from '../../constants/pagination';

import './styles.css';

export const Pagination = ({currentPage, pagesCount, cardsPerPage, updateCardsCountPerPage, setCurrentPage}) => {
    const getOtherCardsNum = () => cardsPerPage === CARDS_PER_PAGE.standard ? CARDS_PER_PAGE.minimum : CARDS_PER_PAGE.standard;

    const chooseCardsNumPerPage = event => {
        event.preventDefault();
        updateCardsCountPerPage(getOtherCardsNum());
    }


    const updateCurrentPageNumber = num => {
        if (num <= 0 || num > pagesCount) {
            return;
        }
        setCurrentPage(num);
    }
    
    return (
        <section className="pagination">
            <Button handler={() => updateCurrentPageNumber(--currentPage)} textContent={'prev'}/>
            <span className="pagination__text">{currentPage} of {pagesCount} pages.</span>
            <Button handler={() => updateCurrentPageNumber(++currentPage)} textContent={'next'}/>
            <span className="pagination__text">show</span>
            <Button handler={chooseCardsNumPerPage} textContent={` ${getOtherCardsNum()} `}/>
            <span className="pagination__text">cards per page.</span>
        </section>
    );
};