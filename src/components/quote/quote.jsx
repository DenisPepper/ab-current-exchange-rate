import {quotesList} from "./quotes-list";
import css from './quote.module.css';

export const Quote = () => {
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    const {text, author} = quotesList[randomIndex];

    return (
        <>
            <blockquote className={css.quote}>
                {`'${text}'`}
            </blockquote>
            <cite className={css.author}>
                {`автор: ${author}`}
            </cite>
        </>
    );
}

