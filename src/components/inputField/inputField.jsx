import React from 'react';
import './inputField.scss'

const InputField = ({ name, type, image, placeholder }) => {
    return (
        <div className="input-main">
            <label htmlFor={`${name}`}>{`${name}`}</label>
            <input type={`${type}`} name={`${name}`} className="input-field" />
        </div>

        //<section>
        //<img src={`${image}`} alt={`${name}`}/>
        //<input type={`${type}`} name={`${name}`}  className="input-field"/>
        //</section>


        // placeholder={`${placeholder}`}
    );
};

export default InputField;