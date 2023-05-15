import { useState } from 'react';
import styles from './Input.module.css';
import { fetchVinInfo } from '../../utils/Api';
import { addToLS } from '../../utils/LocalStorage';

function Input({ setVinInfo }) {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    async function formSubmit(e) {
        e.preventDefault();
        setInputError('');
        if (inputValue.trim().length < 17) {
            setInputError(
                'Please input your VIN code. It should be 17 characters long!'
            );
            setVinInfo([]);
        } else if (!/^[A-HJ-NPR-Z0-9]{17}$/i.test(inputValue)) {
            setInputError('Invalid VIN');
            setVinInfo([]);
        } else {
            setInputValue('');
            addToLS(inputValue);
            const data = await fetchVinInfo(inputValue, setIsLoading);
            setVinInfo(data);
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
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder="Your VIN"
                    className={styles.form__input}
                />
                <button className={styles.form__button}>Search</button>
            </form>
            {inputError && <div>{inputError}</div>}
            {isLoading && <div>Loading.....</div>}
        </>
    );
}

export default Input;
