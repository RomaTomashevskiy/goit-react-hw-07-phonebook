import { filterContacts } from "../redux/contactSlice";
import { useDispatch } from "react-redux";

export const useContacts = () => {
    const dispatch = useDispatch();

    const handleSetFilter = name => {
        dispatch(filterContacts(name));
    };

        return {
            filterContacts: handleSetFilter,
    };
};