import './styles.css';

export const Button = ({textContent, handler}) => {
    return (
        <button className="button" onClick={handler}>{textContent}</button>
    );
};