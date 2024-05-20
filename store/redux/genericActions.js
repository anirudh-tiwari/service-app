export const apiCallLoading = (feature, key, isLoading) => ({
	type: `${feature}/${key}_SET_LOADING`,
	payload: isLoading,
});
export const setStateProp = (feature, key, value) => ({
	type: `${feature}/${key}_SET_STATE_PROP`,
	key,
	value,
});
export const reset = (feature, key, value) => ({
	type: `${feature}/${key}_RESET`,
	key,
	value,
});
