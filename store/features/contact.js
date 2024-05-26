import { createApiReducer } from "../redux/reducerFactory";
import GetDispatchers from "../redux/dispatchers";
import GetSelectors from "../redux/selectors";

const feature = "contact";

const contactReducer = createApiReducer(feature, [], {
  contactList: [],
  safeWord: "",
  safetyCheckList: [],
  localBanner: true,
});

export default contactReducer;

export const ContactSelectors = () => {
  const { getStateProp } = GetSelectors(feature);
  return {
    contactList: getStateProp("contactList"),
    safeWord: getStateProp("safeWord"),
    safetyCheckList: getStateProp("safetyCheckList"),
    localBanner: getStateProp("localBanner"),
  };
};

export const ContactDispatchers = () => {
  const { state, setStateProp, reset } = GetDispatchers(feature);

  const addtoContact = (body) => {
    const newList = [...state.contactList, body];
    setStateProp("contactList", newList);
  };

  const addtoSafetyCheck = (body) => {
    const newList = [...state.safetyCheckList, body];
    setStateProp("safetyCheckList", newList);
  };

  return {
    setAddtoContact: (value) => addtoContact(value),
    setSafeWord: (value) => setStateProp("safeWord", value),
    setSafetyCheck: (value) => addtoSafetyCheck(value),
    updateSafetyCheck: (value) => setStateProp("safetyCheckList", value),
    updateLocalBanner: (value) => setStateProp("localBanner", value),
  };
};
