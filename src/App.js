import css from './app.module.css';
import {Quote} from "./components/quote";

export const App = () => {
    return (
        <div className={css.main}>
            {/* Header FC */}
            {/* Converter FC */}
            <Quote />
        </div>
    );
}
