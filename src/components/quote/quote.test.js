import {render, screen} from "@testing-library/react";
import {Quote} from "./quote";



describe('test Quote FC', () => {

    it('should contain an expected text ', () => {
        render(<Quote />);
        const result = screen.getByText(/test Quote/i);
        expect(result).toBeInTheDocument();
    });

})
