import styles from './VinInfo.module.css';

function VinInfo({ vinInfo }) {
    return (
        <div className={styles.vininfo}>
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
    );
}

export default VinInfo;
