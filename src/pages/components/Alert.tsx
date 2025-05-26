import styles from './styles/Alert.module.css'

interface alertProps{
    title: string,
    message: string
}

const Alert = (props: alertProps) => {
    return(
        <>
            <div className={styles.alert}>
                <span className={styles.title_}>{props.title}</span><br/>
                <span className={styles.message_}>{props.message}</span>
            </div>
        </>
    )
}

export default Alert;