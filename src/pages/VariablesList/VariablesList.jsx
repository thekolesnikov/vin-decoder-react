import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchVariables } from '../../utils/Api';
import styles from './VariablesList.module.css';

function VariablesList() {
    const [isLoading, setIsLoading] = useState(false);
    const [variables, setVariables] = useState([]);
    useEffect(() => {
        fetchVariables(setIsLoading, setVariables);
    }, []);
    return (
        <div className={styles.variables}>
            {isLoading && <div>Loading....</div>}
            <div className={styles.variables__list}>
                {variables.map((item) => {
                    return (
                        <Link
                            className={styles.variables__item}
                            key={item.ID}
                            to={`/variables/${item.ID}`}
                        >
                            {item.Name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default VariablesList;
