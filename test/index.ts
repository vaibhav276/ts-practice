import { expect } from 'chai';
import 'mocha';
import * as arr from '../src/arrays';

describe('Array', () => {
    it('1-d largest (recursion)', () => {
        let xs: number[] = [1, 2, 5, 3, 8, 4];
        expect(arr.largest(xs, 0)).to.eq(8);
    });
});
