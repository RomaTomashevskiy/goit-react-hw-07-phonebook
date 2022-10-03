import { useState } from 'react';
import shortid from "shortid";
import './index.css';
import PropTypes from 'prop-types';





const ContactForm = ({formSubmit}) => {


    const nameId = shortid.generate();
    const numberId = shortid.generate();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const hangleChangeInput = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default: return;
        };
    };

    const onSubmitForm = e => {
        e.preventDefault();
        formSubmit(name ,number)
        e.target.reset()
    };
   


    return <form action="" className="form" onSubmit={onSubmitForm}>
        <label htmlFor={nameId} className="label_name">
            Name
            <input
                id={nameId}
                className="input_name"
                onChange={hangleChangeInput}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>

        <label htmlFor={numberId} className="label_number">
            Number
            <input
                id={numberId}
                className="input_number"
                onChange={hangleChangeInput}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </label>
        <button type="submit" className="btn_form ">Add Contact</button>
    </form>
};

ContactForm.prototype = {
    formSubmit: PropTypes.func.isRequired
}
export default ContactForm;