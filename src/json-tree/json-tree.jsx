import { useState } from 'react';
import Entity from './entity';
import { TreeContext } from './context';
import './json-tree.css';

const JsonTree = ({ jsonData }) => {
	const [selectedPath, setSelectedPath] = useState('');

	return (
		<TreeContext.Provider value={[selectedPath, setSelectedPath]}>
			<Entity json={jsonData} />
		</TreeContext.Provider>
	);
};

export default JsonTree;
