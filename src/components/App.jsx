import ContactForm from "./Form/ContactsForm";
import Filter from "./Filter";
import ContactsList from "./ContactsList";
import { getItems , getFilter} from 'redux/selector';
import { useSelector , useDispatch} from "react-redux"; 
import shortid from "shortid";
import { addContact } from "redux/operations";
import { useContacts } from "../hook/hook";

export const App = () => {

  const { filterContacts } = useContacts();
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  
  const handleChangeInput = e => {
    const { value } = e.target;
   filterContacts(value);
  };

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
  

  const formSubmit = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    };
    const onFindName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    const onFindNum = contacts.find(contact => contact.number.toLowerCase() === number.toLowerCase());

    if (onFindName) {
      alert(`${name} is already in contacts.`);
    } else if (onFindNum) {
      alert(`${number} is already in contacts.`);
    } else {

      dispatch(addContact(contact));
    };
  }

  return (
    <>
      <ContactForm formSubmit={formSubmit} />
      <Filter value={filter}   onChange={handleChangeInput}/>
      <ContactsList items={filteredContacts} />
    </>
  )
};


export default App;
