export const largest = (xs: number[], i: number): number => {
    if (i < 0 ) {
        throw Error('invalid index');
    }
    if (i == xs.length - 1) {
        return xs[i];
    }

    const restmax = largest(xs, i + 1);
    return xs[i] > restmax ? xs[i] : restmax;
}
