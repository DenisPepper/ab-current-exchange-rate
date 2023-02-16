import {quotes} from "./quotes";

export const Quote = () => {
    const {text, author} = quotes[0];

    return (
        <>
            <blockquote>
                {`quote: ${text}`}
            </blockquote>
            <site>
                {`author: ${author}`}
            </site>
        </>
    );
}

