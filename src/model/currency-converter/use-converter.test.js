import {renderHook} from "@testing-library/react-hooks";
import {useConverter} from "./use-converter";

const currencyRange = 50;
const initialRubValue = 100;
const evaluatedUsdValue = 2;

/*
 result.current - это текущий вызов хука
 result.all - все вызовы хука
 */
describe('when render', () => {
    it('rub should be equal initial value', () => {
        const {result} = renderHook(() => useConverter(
            {initialRubValue, currencyRange}
        ));
        expect(result.current.rub).toEqual(initialRubValue);
    });

    it('usd should be evaluated with initial rub value', () => {
        const {result} = renderHook(() => useConverter(
            {initialRubValue, currencyRange}
        ));
        expect(result.current.usd).toEqual(evaluatedUsdValue);
    });
})

describe('when use updateRub', () => {
    it.todo('should update the rub value');
    it.todo('should evaluate the usd value');
})

describe('when use updateUsd', () => {
    it.todo('should update the usd value');
    it.todo('should evaluate the rub value');
})

describe('when re-render with new currency range', () => {
    it.todo('should update input-value by new currency range');
})
