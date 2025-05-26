import React from 'react';

//Import CSS Style
import styles from './styles/Input.module.css';

interface InputProps{
    label: string,
    placeholder: string,
    disabled: boolean,
    type: string
}

const Input = (props: InputProps) => {
    return(
        <>
            <div className="content_input_">
                <label className='label_'>{props.label}</label>
                <input
                    className='input_ w-100'
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    type={props.type}
                />
            </div>
        </>
    )
}

export default Input