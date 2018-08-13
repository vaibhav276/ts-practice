import { expect } from 'chai';
import 'mocha';
import * as arr from '../src/arrays';

describe('Array', () => {
    it('1-d largest (recursion)', () => {
        let xs: number[] = [1,2,5,3,8,4];
        expect(arr.largest1d(xs, 0)).to.eq(8);
    });

    it('2-d largest (recursion)', () => {
        let xss: number[][] = [[1,2,5,4,0],
                               [4,2,9,0,5],
                               [12,5,3,8,0]
                              ];
        expect(arr.largest2d(xss, 0)).to.eq(12);
        let yss: number[][] = [[1,2,5,4,0],
                               [12,5,3,8,0],
                               [4,2,9,0,5]
                              ];
        expect(arr.largest2d(yss, 0)).to.eq(12);
    })
});
