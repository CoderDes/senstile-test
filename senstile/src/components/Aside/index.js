import { Description } from '../Description';
import { Button } from '../../containers/Button';

import '../styles.css';
import './styles.css';


export const Aside = ({isHorizontal, setShowMode, targetCard}) => {
    
    const setButtonText = () => `show ${isHorizontal ? 'vertical' : 'horizontal'} mode`;

    const changeShowMode = () => {
        setShowMode(!isHorizontal);
    };

    return (
        <aside className="aside">
            <header className="aside__header">
                <Button handler={changeShowMode} textContent={setButtonText()}/>
            </header>
            { targetCard ? <Description targetCard={targetCard}/> : null }
        </aside>
    );
};