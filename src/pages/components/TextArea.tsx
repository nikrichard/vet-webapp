//Import CSS Style
import styles from './styles/TextArea.module.css';

interface propsTextArea {
    label: string,
    placeholder: string,
    disabled: boolean,
    rows: number
}

const TextArea = (props: propsTextArea) => {
    return(
        <>
            <div className={styles.content_textarea_}>
                <label>{props.label}</label>
                <textarea 
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    rows={props.rows}
                ></textarea>
            </div>
        </>
    )
}

export default TextArea