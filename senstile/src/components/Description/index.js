import { useEffect, useState } from 'react';

import { Textiles } from './Textiles';

import { DESCRIPTION_CATEGORIES_LIST, DESCRIPTION_CATEGORIES_NAMES } from '../../constants/description';
import { URL_API } from '../../constants/api';

import './styles.css';

export const Description = ({targetCard}) => {
    const [currentCategory, setCategory] = useState(DESCRIPTION_CATEGORIES_LIST.length && DESCRIPTION_CATEGORIES_LIST[0] || null);
    const [fullInfo, setFullInfo] = useState(null);
    
    const getCategoryComponent = (category) => {
        if (!category) {
            return null;
        }

        switch (currentCategory) {
            case DESCRIPTION_CATEGORIES_NAMES.textiles:
                return <Textiles data={fullInfo.textiles}/>
            case DESCRIPTION_CATEGORIES_NAMES.rules:
                return <section>Rules</section>
            case DESCRIPTION_CATEGORIES_NAMES.suppliers:
                return <section>Suppliers</section>
            default:
                return <Textiles data={fullInfo.textiles}/>
        }
    }

    useEffect(() => {
        if (targetCard.id) {
            fetch(`${URL_API}/full-description/${targetCard.id}`)
                .then(response => response.json())
                .then(data => setFullInfo(data))
                .catch(err => console.error("Something went wrong. Can't fetch resource", err));
            return;
        }
    }, [targetCard])

    return (
        <>
            {
                fullInfo === null ? null :
                <section className="description">
                    <ul className="description__categories">
                        {
                            Array.isArray(DESCRIPTION_CATEGORIES_LIST) && DESCRIPTION_CATEGORIES_LIST.map(category => (
                                <li key={category} className="description__category" onClick={() => setCategory(category)}>
                                    {category}
                                </li>
                            )) || null
                        }
                    </ul>
                    { currentCategory !== null ? getCategoryComponent(currentCategory) : null }
                </section>
            }
        </>
    );
}