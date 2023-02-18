import {renderHook, act} from "@testing-library/react-hooks";
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
    it('should update the rub value', () => {
        const {result} = renderHook(() => useConverter(
            {initialRubValue, currencyRange}
        ));
        act(() => {
            result.current.updateRub((19))
        });
        expect(result.current.rub).toEqual(19);
    });

    it('should evaluate the usd value', () => {
        const {result} = renderHook(() => useConverter(
            {initialRubValue, currencyRange}
        ));
        act(() => {
            result.current.updateRub(19)
        });
        expect(result.current.usd).toEqual(0.38);
    });
})

describe('when use updateUsd', () => {
    it('should update the usd value', () => {
        const {result} = renderHook(() => useConverter(
            {initialRubValue, currencyRange}
        ));
        act(() => {
            result.current.updateUsd(49)
        });
        expect(result.current.usd).toEqual(49);
    });


    it('should evaluate the rub value', () => {
        const {result} = renderHook(() => useConverter(
            {initialRubValue, currencyRange}
        ));
        act(() => {
            result.current.updateUsd(49)
        });
        expect(result.current.rub).toEqual(2450);
    });
})

describe('when re-render with new currency range', () => {
    it.todo('should update input-value by new currency range');
})
