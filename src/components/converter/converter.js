import css from './converter.module.css';

export const Converter = () => {
    return (
        <form className={css.form}>
            <label className={css.label}>
                <span className={css.label_text}>
                    ₽
                </span>
                <input className={css.input} type="number" name={'rub'} min={0} step={1}/>
            </label>

            <label className={css.label}>
                <span className={css.label_text}>
                    $
                </span>
                <input className={css.input} type="number" name={'usd'} disabled/>
            </label>
        </form>
    );
}
