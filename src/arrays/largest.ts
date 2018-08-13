export const largest1d = (xs: number[], i: number): number => {
    if (i < 0 ) {
        throw Error('invalid index');
    }
    if (i == xs.length - 1) {
        return xs[i];
    }

    const restmax = largest1d(xs, i + 1);
    return xs[i] > restmax ? xs[i] : restmax;
}

export const largest2d = (xss: number[][], i: number): number => {
    if (i < 0 ) {
        throw Error('invalid index');
    }
    if (i == xss.length - 1) {
        return largest1d(xss[i], 0);
    }
    const largest = largest1d(xss[i], 0);
    const restlargest = largest2d(xss, i + 1);
    return largest > restlargest ? largest : restlargest;
}
