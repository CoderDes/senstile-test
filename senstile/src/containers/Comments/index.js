import { useState } from 'react';

import { Button } from '../Button';

import { DEFAULT_VALUES } from '../../constants/defaults';

import './styles.css';

export const Comments = ({comments}) => {
    const [showComments, toggleComments] = useState(false);

    return (
        <section className="comments">
            <Button handler={() => toggleComments(!showComments)} textContent={'comments'}/>
            {
                showComments ?
                <ul className="comments__list">
                    {
                        Array.isArray(comments) && comments.length > 0 &&
                        comments.map((comment, i) => (
                            <li key={i + Math.random()} className="comments__item">
                                <p className="comments__author"><strong>{comment.author}</strong></p>
                                <p className="comments__text">{comment.text}</p>
                            </li>
                        )) || DEFAULT_VALUES.NO_DATA
                    }
                </ul> : null
            }
        </section>
    );
}