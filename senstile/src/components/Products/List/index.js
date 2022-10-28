import { Card } from '../Card';

import './styles.css';

export const ProductList = ({prods, horizontalShowMode, chooseCard}) => {
    return (
        <ul className={horizontalShowMode ? 'collection' : 'collection--vert'}>
            {
                prods.map(prodInfo => (
                    <li key={prodInfo.id}>
                        <Card info={prodInfo} chooseCard={chooseCard}/>
                    </li>
                ))
            }
        </ul>
    );
};