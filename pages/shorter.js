
function long(n){
n=BigInt(n)
return String((n*(n+1n))/2n)
}

function short(e){
e=BigInt(e)
return String(((-1n+sqrt(1n-(4n*-((e)*2n))))/2n))
}

function sqrt(value) {
    if (value < 0n) {
        throw 'square root of negative numbers is not supported'
    }

    if (value < 2n) {
        return value;
    }

    function newtonIteration(n, x0) {
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

    return newtonIteration(value, 1n);
}
