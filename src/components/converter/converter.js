import css from './converter.module.css';
import {useConverter} from "model";

export const Converter = () => {
    const {rub, usd, updateRub, updateUsd} = useConverter(
        {initialRubValue: 100, currencyRange: 50}
    );

    return (
        <form className={css.form}>
            <label className={css.label}>
                <span className={css.label_text}>
                    RUB, ₽
                </span>
                <input
                    className={css.input}
                    type="number"
                    name={'rub'}
                    min={0}
                    step={1}
                    value={rub}
                    onChange={(evt) => updateRub(evt.target.value)}
                />
            </label>

            <label className={css.label}>
                <span className={css.label_text}>
                    USD, $
                </span>
                <input
                    className={css.input}
                    type="number"
                    name={'usd'}
                    value={usd}
                    onChange={(evt) => updateUsd(evt.target.value)}
                />
            </label>
        </form>
    );
}
