import {useState} from "react";
import {rubToUsd, usdToRub} from "model/currency-converter/currency-converter";

export const useConverter = (props) => {
    const {
        initialRubValue,
        currencyRange
    } = props;

    const initialUsdValue = rubToUsd(initialRubValue, currencyRange);

    const [rub, setRub] = useState(() => initialRubValue);

    const [usd, setUsd] = useState(() => initialUsdValue);

    const updateRub = (rubValue) => {
        const rub = Number(rubValue);
        const usd = rubToUsd(rub, currencyRange);
        setRub(rub);
        setUsd(usd);
    }

    const updateUsd = (usdValue) => {
        const usd = Number(usdValue);
        const rub = usdToRub(usd, currencyRange);
        setRub(rub);
        setUsd(usd);
    }

    return {
        rub,
        usd,
        updateRub,
        updateUsd,
    };
}

