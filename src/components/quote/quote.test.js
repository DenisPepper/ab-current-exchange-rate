import {render, screen} from "@testing-library/react";
import {Quote} from "./quote";
import {quotes} from "./quotes";



describe('test Quote FC', () => {
    const {text, author} = quotes[0];

    it('should contain an expected quote text ', () => {
        render(<Quote />);
        const result = screen.getByText(new RegExp(text));
        expect(result).toBeInTheDocument();
    });

    it('should contain an expected author name ', () => {
        render(<Quote />);
        const result = screen.getByText(new RegExp(author));
        expect(result).toBeInTheDocument();
    });

})
