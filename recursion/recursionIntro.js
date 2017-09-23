//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function whileLooper(n) {
    while (n >= 0) {
        console.log(n--);
    }
}
console.log(whileLooper(10));

//2. Next, try looping just like above except using recursion
function recursiveLooper(n) {
    if (n < 0) {
        return;
    } else {
        console.log(n--);
        recursiveLooper(n);
    }
}
console.log(recursiveLooper(10));

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base,expo){
    var result=1;
    while(expo>0){
        result*=base;
        expo--;
    }
    return result;
}

console.log(exponent(2,3));
console.log(exponent(3,3));

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function RecursiveExponent(base,expo){
    if(expo<1){
        return 1;
    } else {
        return base * RecursiveExponent(base,expo-1);
    }
}

console.log(RecursiveExponent(2,3));
console.log(RecursiveExponent(3,3));

/*
2*f(2,2)
f(2,2)=2*f(2,1)
f(2,1)=2*f(2,0)
f(2,0)=1;*/

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
//Initial attempt
function recursiveReverse(array) {
    
    if (typeof newArray == 'undefined') {
        console.log("hi");
        var newArray = [];
        var initLength = array.length;
    }
    if (newArray.length === initLength) {
        console.log("ending");
        return newArray;
    } else {
        newArray.push(array.pop());
        recursiveReverse(array);
    }
}

console.log(recursiveReverse([6, 4, 2, 0]));
