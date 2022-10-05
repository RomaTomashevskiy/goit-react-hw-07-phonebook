import shortid from 'shortid';
import './index.css';
import { useContacts } from 'hook/hook';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';




const Filter = () => {
    const filterId = shortid.generate();

    
    const { filterContacts } = useContacts();
    const filter = useSelector(getFilter);
    
    const handleChangeInput = e => {
        const { value } = e.target;
        filterContacts(value);
    };

    return (
        <label htmlFor={filterId} className='filter_label'>
            Find contact by name
            <input id={filterId} type="text" value={filter} onChange={handleChangeInput} className='filter_input' />
        </label>
    );
};


export default Filter;