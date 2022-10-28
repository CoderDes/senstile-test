import { Comments } from '../../../containers/Comments';

import { DEFAULT_VALUES } from '../../../constants/defaults';

import './styles.css';

export const Textiles = ({data}) => {
    return (
        <ul>
            {
                data.map(({images, comments, title, material, desc, id}) => {
                    return (
                        <li key={`${id}`} className="description-block">
                            <img className="description-block__image" src={images[0]} alt={desc || DEFAULT_VALUES.NO_DATA} />
                            <div className="description-block__info">
                                <div>
                                    <span>{title || DEFAULT_VALUES.NO_DATA}</span>
                                    <hr />
                                    <span>{material || DEFAULT_VALUES.NO_DATA}</span>
                                </div>
                                <Comments comments={comments}/>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    );
}