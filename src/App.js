import css from './app.module.css';
import {Quote} from "./components/quote";
import {Converter} from './components/converter';

export const App = () => {
    return (
        <div className={css.main}>
            {/* Header FC */}
            <Converter />
            <Quote />
        </div>
    );
}
