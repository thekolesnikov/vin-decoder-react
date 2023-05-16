import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchFilterVariables } from '../../utils/Api';
import styles from './VariablesItem.module.css';

function VariablesItem() {
    const navigate = useNavigate();
    const params = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [variableItem, setVariableItem] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (parseInt(params.id) > 0 && parseInt(params.id) < 197) {
            fetchFilterVariables(setIsLoading, setVariableItem, params);
        } else {
            setError("Unfotunately this page doesn't exist");
        }
    }, []);

    return (
        <div>
            <button
                className={styles.variableitem__button}
                onClick={() => navigate(-1)}
            >
                Go back
            </button>
            {isLoading && <div>Loading....</div>}
            {!error ? (
                <>
                    {' '}
                    <h2 className={styles.variableitem__title}>
                        {variableItem[0]?.Name}
                    </h2>
                    <div className={styles.variableitem__name}>
                        {variableItem[0]?.Description.replace(
                            '<p>',
                            ''
                        ).replace('</p>', '')}
                    </div>
                </>
            ) : (
                <div>{error}</div>
            )}
        </div>
    );
}

export default VariablesItem;
