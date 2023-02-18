import {useState} from "react";
import {rubToUsd} from "model/currency-converter/currency-converter";

export const useConverter = (props) => {
    const {
        initialRubValue,
        currencyRange
    } = props;

    const initialUsdValue = rubToUsd(initialRubValue, currencyRange);

    const [rub, setRub] = useState(() => initialRubValue);

    const [usd, setUsd] = useState(() => initialUsdValue);

    return {
        rub,
        usd,
        updateRub: setRub,
        updateUsd: setUsd,
    };
}

