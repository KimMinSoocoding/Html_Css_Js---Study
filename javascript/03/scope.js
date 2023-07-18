var num;
console.log(num);
var num = 10;
console.log(num);

f1();
// f2();

function f1(){
    console.log("f1");
}

let f2 = function(){
    console.log("f2")
}

// 함수데이터타입 
console.log(typeof f1);
console.log(typeof f2);

let f3 = f1; // 
f3();

let f4 = function(p1, p2){
    p1();
    p2();
}

// parameter를 통해 함수의 호출을 위임할수 있음 
// 이때 이 함수를 callback
f4(f1,function() {console.log(1234)}); // 익명식 선언


let f5 = function(a, b) {
    return a + b;
}

// 람다식
let f6 = (a,b) => a + b; // 위와 같다 
let f7 = (a,b) => { return a + b }; // 위와 같다 

console.log(f5(10,20));
console.log(f6(10,20));
console.log(f7(10,20));

// var c = 20; 
function f8(a,b){
    c = 10;
}
f8(); // undefined
console.log(c);



