import styles from './VinInfo.module.css';

function VinInfo({ vinInfo }) {
    return (
        <>
            {vinInfo[1] && (
                <div className={styles.vininfo}>
                    <div className={styles.vininfo__title}>
                        VIN Information: {vinInfo[1]}
                    </div>
                    {vinInfo[0].map((item) => {
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
