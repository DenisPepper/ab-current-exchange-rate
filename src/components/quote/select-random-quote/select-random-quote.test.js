import {selectRandomQuote} from "./select-random-quote";
import {quotesList} from "../quotes-list";

beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.8);
})

afterEach(() => {
    jest.restoreAllMocks();
});

describe('when called with a quotes list ', () => {

    it('should return the quote with index = 2 (mock random)', () => {
        const actual = selectRandomQuote(quotesList);
        const expected = quotesList[2];
        expect(actual).toEqual(expected);
    });
})
