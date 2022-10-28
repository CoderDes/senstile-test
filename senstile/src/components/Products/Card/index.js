import './styles.css';

export const Card = ({info, chooseCard}) => {
    return (
        <section className="card" onClick={() => {
            chooseCard(info);
        }}>
            <img className="card__image" src={info.img} alt={info.desc} />
            <p className="card__description">{info.desc}</p>
        </section>
    );
};