import { useState } from 'react';
import styles from './Input.module.css';

function Input({ vinInfo, setVinInfo }) {
    const [inputError, setInputError] = useState('');
    function formSubmit(e) {
        e.preventDefault();
        setInputError('');
        if (vinInfo.trim().length < 17) {
            setInputError(
                'Please input your VIN code. It should be 17 characters long!'
            );
        } else if (!/^[A-HJ-NPR-Z0-9]{17}$/i.test(vinInfo)) {
            setInputError('Invalid VIN');
        } else {
            setVinInfo('');
        }
    }
    return (
        <>
            <form
                className={styles.form}
                onSubmit={(e) => formSubmit(e)}
                action="submit"
            >
                <input
                    value={vinInfo}
                    onChange={(e) => setVinInfo(e.target.value)}
                    type="text"
                    placeholder="Your VIN"
                    className={styles.form__input}
                />
                <button className={styles.form__button}>Search</button>
            </form>
            {inputError && <div>{inputError}</div>}
        </>
    );
}

export default Input;
