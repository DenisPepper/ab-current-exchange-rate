import {render, screen} from "@testing-library/react";
import {Quote} from "./quote";
import {quotesList} from "./quotes-list";

describe('test Quote FC', () => {
    const quoteStub = quotesList[2];
    const {text, author} = quoteStub;

    it('should contain an expected quote text ', () => {
        render(<Quote quote={quoteStub}/>);
        const result = screen.getByText(new RegExp(text));
        expect(result).toBeInTheDocument();
    });

    it('should contain an expected author name ', () => {
        render(<Quote quote={quoteStub}/>);
        const result = screen.getByText(new RegExp(author));
        expect(result).toBeInTheDocument();
    });

})
