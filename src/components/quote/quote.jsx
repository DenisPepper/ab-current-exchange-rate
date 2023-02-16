import {mockQuotes} from "./mock-quotes";
import css from './quote.module.css';

export const Quote = () => {
    const {text, author} = mockQuotes[2];

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

