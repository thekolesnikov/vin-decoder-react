import styles from './LastRequests.module.css';

function LastRequests({ setVinInfo, fetchVin, isLoading }) {
    const lastVINs = JSON.parse(localStorage.getItem('lastVINs'));

    return (
        <>
            {lastVINs && (
                <div className={styles.lastvins}>
                    <div className={styles.lastvins__title}>Last Requests:</div>
                    {lastVINs?.map((vin, index) => {
                        return (
                            <p
                                className={
                                    isLoading
                                        ? styles.lastvins__item_loading
                                        : styles.lastvins__item
                                }
                                key={index}
                                onClick={async () => {
                                    setVinInfo([]);
                                    fetchVin(vin);
                                }}
                            >
                                {vin}
                            </p>
                        );
                    })}
                    {isLoading && (
                        <div className={styles.lastvins__loading}>
                            Loading.....
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default LastRequests;
