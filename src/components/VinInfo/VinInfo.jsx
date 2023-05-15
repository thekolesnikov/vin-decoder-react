import styles from './VinInfo.module.css';

function VinInfo({ vinInfo, vin }) {
    return (
        <>
            {vin && (
                <div className={styles.vininfo}>
                    <div className={styles.vininfo__title}>
                        VIN Information: {vin}
                    </div>
                    {vinInfo.map((item) => {
                        return (
                            <div
                                className={styles.vininfo__string}
                                key={item.VariableId}
                            >
                                <span>{item.Variable}: </span>
                                {item.Value}
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default VinInfo;
