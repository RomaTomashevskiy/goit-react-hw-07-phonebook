import './index.css';
import { getError, getLoader } from 'redux/selector'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchContact , deleteContact} from 'redux/operations';
import { useEffect } from 'react';
import { getItems , getFilter} from 'redux/selector';


const ContactsList = () => {
    
    const error = useSelector(getError);
    const loader = useSelector(getLoader);
    const contacts = useSelector(getItems);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const remove = (id) => dispatch(deleteContact(id));

    // useEffect
    useEffect(() => { dispatch(fetchContact()) }, [dispatch]);

    // func
    const filterArry = () => {
        if (contacts.length !== 0) {
            const normalizedFilter = filter.toLowerCase();
            return contacts.filter(({ name }) =>
                name.toLowerCase().includes(normalizedFilter)
            );
        }
        return [];
    };
    
    const filteredContacts = filterArry();


    return (
        <>
            {loader && <h1>Loading...</h1>}
            <ul>
                {filteredContacts.map(({ id, name, number }) => {
                    return <li key={id} className="item">
                        <p className="text">{name}: {number}</p>
                        <button className="list_btn" type="button" onClick={() => remove(id)}>Delete</button>
                    </li>
                })}
            </ul>
            {error && <h1>Error...</h1>}
        </>
    )
};


export default ContactsList;