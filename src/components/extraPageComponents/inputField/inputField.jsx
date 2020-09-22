import React, { useState } from 'react';
import './inputField.scss'

const InputField = ({ name, type, image, placeholder }) => {

    const [field, setField] = useState("");

    return (
        <div className="input-main">
            <label htmlFor={`${name}`} className={`${field === "" ? 'input-label' : 'up'}`}>{`${name}`}</label>
            <input type={`${type}`} name={`${name}`} className="input-field" onChange={e=>setField(e.target.value)}/>
        </div>

        //<section>
        //<img src={`${image}`} alt={`${name}`}/>
        //<input type={`${type}`} name={`${name}`}  className="input-field"/>
        //</section>


        // placeholder={`${placeholder}`}
    );
};

export default InputField;