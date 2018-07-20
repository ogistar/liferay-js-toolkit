import * as util from '../util';

import path from 'path';

describe('loadSourceMap()', () => {
	it('works with //# annotation', () => {
		const sourceMap = util.loadSourceMap(
			path.join(
				__dirname,
				'__fixtures__',
				'sourcemaps',
				'sourceMapFile1.js.file'
			)
		);

		expect(sourceMap).toMatchSnapshot();
	});

	it('works with /*# annotation', () => {
		const sourceMap = util.loadSourceMap(
			path.join(
				__dirname,
				'__fixtures__',
				'sourcemaps',
				'sourceMapFile2.js.file'
			)
		);

		expect(sourceMap).toMatchSnapshot();
	});
});
