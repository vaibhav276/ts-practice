/**
 * Rotate a 2D array
 * dir = 0: counter-clockwise
 *     = 1: clockwise
*/
export const rotate2d = (xss: number[][], dir: number): number[][] => {
    const sz = xss.length;
    for (let i = 0; i < sz / 2; i++) {
        for (let j = i; j < sz - i - 1; j++) {
            let [i1, j1] = port(i, j, sz, dir);
            let x = xss[i][j];
            x = move(xss, x, i1, j1);

            let [i2, j2] = port(i1, j1, sz, dir);
            x = move(xss, x, i2, j2);

            let [i3, j3] = port(i2, j2, sz, dir);
            x = move(xss, x, i3, j3);

            let [i4, j4] = port(i3, j3, sz, dir);
            x = move(xss, x, i4, j4);
        }
    }
    return xss;
}

let move = (xss: number[][], x: number, i_: number, j_: number): number => {
    let temp = xss[i_][j_];
    xss[i_][j_] = x;
    return temp;
}

let port = (i: number, j: number, sz: number, dir: number): [number, number] => {
    if (dir == 0) {
        return [sz - j - 1, i];
    } else {
        return [j, sz - i - 1];
    }
}
