function sum(p1, p2){
    let sum = p1 + p2;
    return sum;
}

let sum1 = sum(21,24);
let sum2 = sum(7,16);
    
console.log(sum1);
console.log(sum2);

/**
 * 두 수를 입력받아 그 합계를 반환하는 기능 
 * @param {*} p1 
 * @param {*} p2 
 * @returns p1 + p2 
 */

let sumF = function(p1, p2){
    return p1 + p2;
}
console.log(sumF(10,20));

// 호이스트 , 스코프에 대해 알기 

let sumF2 = new Function("p1", "p2", "return p1+p2");
console.log(sumF(30,35))

// eval 
eval("console.log(1234);")
