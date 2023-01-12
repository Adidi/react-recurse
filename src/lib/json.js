export const toJson = rawData => {
	const json = {};

	const buildItem = (parent, paths) => {
		if (paths.length === 0) {
			return;
		}

		const [current, ...rest] = paths;
		if (!parent[current]) {
			parent[current] = {};
		}

		buildItem(parent[current], rest);
	};

	for (const item of rawData) {
		const paths = item.split('.');
		buildItem(json, paths);
	}

	return json;
};
