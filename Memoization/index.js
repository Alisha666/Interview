let sum = 0;
function calc(n){
    for(var i=1;i<=n;i++){
        sum = sum + i;
    }
    return sum;
}

//store our result in cache using closure
const memoize=(fun)=>{
    let cache={};
    return function(...args){
        let n = args[0];
        if(n in cache){
            console.log('cache');
            return (cache[n]);
        }
        else{
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

console.time();
const eff = memoize(calc);
console.log(eff(5));
console.timeEnd();

console.time();
// const eff = memo  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;