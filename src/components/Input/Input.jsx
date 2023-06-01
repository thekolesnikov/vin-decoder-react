import { useState } from 'react';
import styles from './Input.module.css';
import { addToLS } from '../../utils/LocalStorage';

function Input({ setVinInfo, fetchVin, isLoading }) {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');
    async function formSubmit(e) {
        e.preventDefault();
        if (!isLoading) {
            setInputError('');
            setVinInfo([]);
            if (inputValue.trim().length !== 17) {
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
                fetchVin(inputValue);
            }
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
                    disabled={isLoading ? true : false}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder="Your VIN"
                    className={styles.form__input}
                />
                <button
                    className={
                        isLoading
                            ? styles.form__button_loading
                            : styles.form__button
                    }
                >
                    Search
                </button>
            </form>
            {inputError && (
                <div className={styles.form__error}>{inputError}</div>
            )}
        </>
    );
}

export default Input;
