export const isEmpty = obj => Object.keys(obj).length === 0;

export const isObject = item => {
	return item !== null && !Array.isArray(item) && typeof item === 'object';
};
