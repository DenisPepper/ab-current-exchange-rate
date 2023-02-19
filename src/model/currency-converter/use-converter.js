import {useEffect, useState} from "react";
import {rubToUsd, usdToRub} from "model/currency-converter/currency-converter";

export const useConverter = (initialRubValue, currencyRange) => {

    const initialUsdValue = rubToUsd(initialRubValue, currencyRange);

    const [rub, setRub] = useState(() => initialRubValue);

    const [usd, setUsd] = useState(() => initialUsdValue);

    useEffect(
        () => {
        setRub(initialRubValue);
        setUsd(rubToUsd(initialRubValue, currencyRange));
        },
        [initialUsdValue, currencyRange]
    );

    const createConverter = (direction) => {
        const convert = direction === 'rub-usd' ? rubToUsd : usdToRub;
        const setBase = direction === 'rub-usd' ? setRub : setUsd;
        const setTarget = direction === 'rub-usd' ? setUsd : setRub;

        return (base) => {
            const baseAsNumber = Number(base);
            const target = convert(baseAsNumber, currencyRange);
            setBase(baseAsNumber);
            setTarget(target);
        }
    }

    const updateRub = createConverter('rub-usd');

    const updateUsd = createConverter('usd-rub');

    return {
        rub,
        usd,
        updateRub,
        updateUsd,
    };
}

