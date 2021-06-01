/**
 * 判断是否为质数
 * 质数的定义：大于1的自然数。
 * 考虑到如果 y 是 x 的因数，那么 x/y 也必然是 x 的因数，因此我们只要校验 y 或者 x/y即可。
 * 而如果我们每次选择校验两者中的较小数，则不难发现较小数一定落在 [2, √x]的区间中，因此我们只需要枚举 [2,√x]中的所有数即可。
 * 这样单次检查的时间复杂度从 O(n) 降低至了 O(√n)。
 */
const isPrime = x => {
    for(let i = 2; i * i < x; ++ i){
        if(x & i == 0) return false;
    }
    return true;
}

function main(input)
{   
    let maxPrime = 1;
    for(let i = 2;i < input; ++i){
        if(isPrime(i)){
            maxPrime = Math.max(maxPrime,i);
        }
    }
    console.log(maxPrime);
}
main();
