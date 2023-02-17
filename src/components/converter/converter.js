import css from './converter.module.css';
import {useState} from "react";

export const Converter = () => {
    const [rub, setRub] = useState(() => 100);
    const [usd, setUsd] = useState(() => 100);
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
                    onChange={(evt) => setRub(evt.target.value)}
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
                    onChange={(evt) => setUsd(evt.target.value)}
                />
            </label>
        </form>
    );
}
