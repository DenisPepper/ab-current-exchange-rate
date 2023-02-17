import {rubToUsd, usdToRub} from "./currency-converter";

describe('test rubToUsd func', () => {

    it('should return an entry argument', () => {
        const amount = 100;
        const rate = 50;
        const expected = amount / rate;
        const actual = rubToUsd(amount, rate);
        expect(actual).toBe(expected);
    });
});

describe('test usdToRub func', () => {

    it('should return an entry argument', () => {
        const testCases = [
            {usd: 10, rate: 50, rub: 500},
            {usd: 19.54, rate: 51, rub: 996.54},
            {usd: 19.54, rate: 50.59, rub: 988.53},
            {usd: 0, rate: 50, rub: 0},
            {usd: 50, rate: 0, rub: 0},
            {usd: 0, rate: 0, rub: 0},
            {usd: 19.5412, rate: 50.59451, rub: 988.68},
            {usd: -1.15, rate: 50.59451, rub: 0},
        ];

        testCases.forEach((tCase) => {
        const {usd, rate, rub} = tCase;
            const actual = usdToRub(usd, rate);
            expect(actual).toBe(rub);
        });
    });
});
