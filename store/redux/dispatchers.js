import { get } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { reset, setStateProp } from "./genericActions";

const GetDispatchers = (feature) => {
  const dispatch = useDispatch();
  const state = useSelector((s) => get(s, feature));

  return {
    setStateProp: (key, value) => dispatch(setStateProp(feature, key, value)),
    reset: (key) => dispatch(reset(feature, key)),
    state,
  };
};

export default GetDispatchers;
