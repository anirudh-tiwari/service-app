import { get } from 'lodash';
import { useSelector } from 'react-redux';

const GetSelectors = (feature) => {
	const state = useSelector((s) => get(s, feature));

	return {
		getStateProp: (key) => get(state, key),
	};
};

export default GetSelectors;
