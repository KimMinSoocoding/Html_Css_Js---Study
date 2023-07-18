let arr = ['봄', '여름','가을','겨울'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

let obj = {a:1, b:2, c:3}; // object

// in 연산자 
console.log('a' in obj);
console.log('b' in obj);

console.log(0 in arr);
console.log(4 in arr);

for(let i in arr){
    console.log(arr[i]);
}

for(let i in obj){
    console.log(i, obj[i]);
}

for(let i of obj){
    console.lof(i);
}