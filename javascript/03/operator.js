// 대입 연산자 
let num = 10; 
num <<=3; 
console.log(num);

num = 3 ** 4
console.log(num);

num = 10;
let str = "10";
console.log(num == str); 
console.log(num === str); // 수치값만 비교하는것이 아닌 타입도 비교하게된다
console.log(num !== str); 

// 산술 연산자 
// + - * / %
// Nan  : Not a Number 
console.log(+"abcd"); // Nan
console.log(typeof NaN); // number 타입
console.log(parseInt("123가나다")); // 변환을 할 수 있는 곳 까지는 해준다 
console.log(isNaN(NaN))
console.log(isFinite(Infinity))
console.log(3/0 == Infinity);

console.log("12" + 3); // 15가 아닌 123 문자열 결합상태로 값을 출력
console.log("12" * 3); // 연산자에 따라서 자동변경이된다 36출력
console.log("12" / 3); // 위와동일
console.log("12" - 3); // 위와동일

console.log(!!"")
console.log(!!0)
console.log(!!NaN)

console.log(!!Infinity)
console.log(!![])
console.log(!!{})
console.log(!!" ")

if(num){

}

let arr = [];
arr.length = 20;
console.log(arr[30])
arr[30] = 1;
console.log(arr);

// 1~100합 
let sum =0; 
// for(let i=1; i<=100; i++){
//     sum+=i
// }
for(let i = 101; i--;){
    sum+=i;
}
console.log(sum);


// 나이에 따른 버스값을 논리 연산자로 출력
let age = 12; 
let busCash =0;

if(age <= 7){
    busCash;
}else if(age >=8 && age <=13){
    busCash=450;
}else if(age >= 14 && age <= 19){
    busCash=720;
}else if(age >= 20 && age < 70){
    busCash=1200;
}else if(age >= 70){
    busCash;
}

console.log(busCash);