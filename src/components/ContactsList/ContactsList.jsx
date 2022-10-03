import './index.css';
import { getError, getLoader } from 'redux/selector'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchContact , deleteContact} from 'redux/operations';
import { useEffect } from 'react';


const ContactsList = ({items}) => {

    const error = useSelector(getError);
    const loader = useSelector(getLoader);
    const dispatch = useDispatch();
    const remove = (id) =>  dispatch(deleteContact(id))

    useEffect(() => { dispatch(fetchContact()) }, [dispatch]);

    return (
        <>
            {loader && <h1>Loading...</h1>}
            <ul>
                {items.map(({ id, name, number }) => {
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