import { createApiReducer } from "../redux/reducerFactory";
import GetDispatchers from "../redux/dispatchers";
import GetSelectors from "../redux/selectors";

const feature = "contact";

const contactReducer = createApiReducer(feature, [], {
  contactList: [],
});

export default contactReducer;

export const ContactSelectors = () => {
  const { getStateProp } = GetSelectors(feature);
  return {
    contactList: getStateProp("contactList"),
  };
};

export const ContactDispatchers = () => {
  const { state, setStateProp, reset } = GetDispatchers(feature);

  const addtoContact = (body) => {
    const newList = [...state.contactList, body];
    setStateProp("contactList", newList);
  };

  return {
    setAddtoContact: (value) => addtoContact(value),
  };
};
