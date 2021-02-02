function stopwatch(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}
const clock1 = stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopwatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());
