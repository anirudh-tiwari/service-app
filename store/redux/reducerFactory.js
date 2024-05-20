import { cloneDeep, get, setWith } from 'lodash';

export const createApiReducer = (feature, keys, customInitialState = {}) => {
	const baseInitialState = keys.reduce(
		(acc, key) => ({
			...acc,
			[key]: { data: null, loading: true, error: null },
		}),
		{}
	);

	// Combine the base initial state with any custom initial state provided
	const initialState = { ...baseInitialState, ...customInitialState };

	return (state = initialState, action) => {
		const matches =
			/(.*)\/(.*?)_(REQUEST|SUCCESS|FAILURE|SET_STATE_PROP|RESET|SET_LOADING)/.exec(
				action.type
			);
		if (!matches || matches[1] !== feature) return state;

		const [, , key, requestState] = matches;
		switch (requestState) {
			case 'REQUEST':
				return {
					...state,
					[key]: { ...state[key], loading: true, error: null },
				};
			case 'SUCCESS':
				return {
					...state,
					[key]: {
						data: action.payload,
						loading: false,
						error: null,
					},
				};
			case 'FAILURE':
				return {
					...state,
					[key]: {
						...state[key],
						loading: false,
						error: action.error,
					},
				};
			case 'SET_LOADING':
				return {
					...state,
					[key]: {
						...state[key],
						loading: action.payload,
					},
				};
			case 'SET_STATE_PROP':
				const newState = cloneDeep(state);
				setWith(newState, action.key, action.value);
				return newState;
			case 'RESET':
				if (action.key) {
					return {
						...state,
						[action.key]: get(
							cloneDeep(initialState),
							action.key,
							null
						),
					};
				}
				return cloneDeep(initialState);
			default:
				return state;
		}
	};
};
