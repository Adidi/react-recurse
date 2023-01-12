import { useState } from 'react';
import { isObject, isEmpty } from '@root/lib';
import Entity from './entity';
import { useTreeContext } from './context';

const Item = ({ jsonKey, jsonValue, parentPath }) => {
	const [selectedPath, setSelectedPath] = useTreeContext();

	const [open, setOpen] = useState(false);
	const hasChildren = isObject(jsonValue) && !isEmpty(jsonValue);

	const prefix = parentPath ? `${parentPath}.` : parentPath;
	const currentPath = `${prefix}${jsonKey}`;

	const isSelectedPath = currentPath === selectedPath;
	const isSelectedParentPath = !isSelectedPath && selectedPath.startsWith(currentPath);

	return (
		<div className="item-box">
			<div
				className="title"
				onClick={() => {
					if (isSelectedPath) {
						setSelectedPath('');
					} else {
						setSelectedPath(currentPath);
					}
				}}
			>
				{hasChildren && (
					<button
						onClick={e => {
							e.stopPropagation();
							setOpen(open => !open);
						}}
					>
						{open ? '-' : '+'}
					</button>
				)}
				<div className={`text ${isSelectedPath ? 'selected' : isSelectedParentPath ? 'selected-parent' : ''}`}>
					{jsonKey}
				</div>
			</div>
			{hasChildren ? (
				<div className={`children ${!open ? 'hide' : ''}`}>
					<Entity json={jsonValue} parentPath={currentPath} />
				</div>
			) : null}
		</div>
	);
};

export default Item;
