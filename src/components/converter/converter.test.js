import {render, screen} from "@testing-library/react";
import {Converter} from "./converter";
import userEvent from "@testing-library/user-event";

describe('test render Converter FC', () => {

    it('rub input should contain an expected text', () => {
        render(<Converter />);
        const input = screen.getByLabelText(/RUB, ₽/);
        expect(input).toBeInTheDocument();
    });

    it('usd input should contain an expected text', () => {
        render(<Converter />);
        const input = screen.getByLabelText(/USD, \$/)
        expect(input).toBeInTheDocument();
    });


})

describe('test user events on rub input Converter FC', () => {
    it(' should update value', () => {
        render(<Converter />);
        const input = screen.getByLabelText(/RUB, ₽/);
        userEvent.clear(input);
        userEvent.type(input, '300');
        expect(input).toHaveValue(300)
    });
})


describe('test user events on usd input Converter FC', () => {
    it('usd input should update value', () => {
        render(<Converter />);
        const input = screen.getByLabelText(/USD, \$/);
        userEvent.clear(input);
        userEvent.type(input, '400');
        expect(input).toHaveValue(400)
    });
})
