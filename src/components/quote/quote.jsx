import {quotesList} from "./quotes-list";
import css from './quote.module.css';
import {selectRandomQuote} from "./select-random-quote/select-random-quote";

const defaultQuote = selectRandomQuote(quotesList);

export const Quote = (props) => {
    const {quote = defaultQuote} = props;
    const {text, author} = quote;

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

