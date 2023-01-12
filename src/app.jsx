import { rawData } from './data';
import { toJson } from '@root/lib';
import JsonTree from './json-tree';

function App() {
	const jsonData = toJson(rawData);

	return (
		<div className="app">
			<JsonTree jsonData={jsonData} />
		</div>
	);
}

export default App;
