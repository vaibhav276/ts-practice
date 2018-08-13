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
    });

    it('2-d rotation counter-clockwise', () => {
        let xss: number[][] = [[1,2,3,4,5],
                               [6,7,8,9,10],
                               [11,12,13,14,15],
                               [16,17,18,19,20],
                               [21,22,23,24,25]
                              ];
        const rot = [[5,10,15,20,25],
                     [4,9,14,19,24],
                     [3,8,13,18,23],
                     [2,7,12,17,22],
                     [1,6,11,16,21]];

        const res = arr.rotate2d(xss, 0);
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                expect(res[i][j]).to.eq(rot[i][j]);
            }
        }
    });
    it('2-d rotation clockwise', () => {
        let xss: number[][] = [[1,2,3,4,5],
                               [6,7,8,9,10],
                               [11,12,13,14,15],
                               [16,17,18,19,20],
                               [21,22,23,24,25]
                              ];
        const rot = [[21,16,11,6,1],
                     [22,17,12,7,2],
                     [23,18,13,8,3],
                     [24,19,14,9,4],
                     [25,20,15,10,5] ];

        const res = arr.rotate2d(xss, 1);
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                expect(res[i][j]).to.eq(rot[i][j]);
            }
        }
    });
});
