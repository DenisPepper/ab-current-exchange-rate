import {render, screen} from "@testing-library/react";
import {Quote} from "./quote";
import {quotesList} from "./quotes-list";

/**
 запустит перед каждым тестом функцию, которая подделает вызов (если он произойдет)
 Math.random() и вернет значение 1
 */
beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.8);
})

/**
 после каждого теста очистим моки для метода Math.random()

 если требуется очистить все моки: jest.restoreAllMocks()
 */
afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore(0.8);
    /* jest.restoreAllMocks()  - очистит все моки*/
});

describe('test Quote FC', () => {
    const {text, author} = quotesList[2];

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
