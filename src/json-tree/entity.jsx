import Item from './item';

const Entity = ({ json, parentPath = '' }) => {
	const entries = Object.entries(json);

	return entries.map(([key, value]) => {
		return <Item key={key} jsonKey={key} jsonValue={value} parentPath={parentPath} />;
	});
};

export default Entity;
