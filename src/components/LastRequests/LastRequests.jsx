import { useState } from 'react';
import styles from './LastRequests.module.css';
import { fetchVinInfo } from '../../utils/Api';

function LastRequests({ setVinInfo }) {
    const lastVINs = JSON.parse(localStorage.getItem('lastVINs'));
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {lastVINs && (
                <div className={styles.lastvins}>
                    <div className={styles.lastvins__title}>Last Requests:</div>
                    {lastVINs?.map((vin, index) => {
                        return (
                            <p
                                className={styles.lastvins__item}
                                key={index}
                                onClick={async () => {
                                    const data = await fetchVinInfo(
                                        vin,
                                        setIsLoading
                                    );
                                    setVinInfo(data);
                                }}
                            >
                                {vin}
                            </p>
                        );
                    })}
                    {isLoading && <div>Loading.....</div>}
                </div>
            )}
        </>
    );
}

export default LastRequests;
