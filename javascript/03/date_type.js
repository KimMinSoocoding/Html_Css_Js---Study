let single = "He is called 'johnny'";
let double = 'He is called "johnny"';
 
console.log(single);  //  He is called 'johnny' 출력
console.log(double); // He is called "johnny" 출력 


// 특정문자 가져오기 

console.log(single.length); // 문자열 길이 반환 21개 

let mixedStr = 'abcd가나다'; 
console.log(mixedStr.length); // 문자열 길이 반환
console.log(mixedStr.substring(4,5)); // 4,5면 4인덱스부터 5미만(이하가 아니라서 5번째 인덱스는 포함안됨)) 
console.log(mixedStr[4]); // 4번째 인덱스 '가' 하나만 가져온다

let x1 = 34;
let x2 = 34.12; 
console.log(typeof mixedStr); // 변수의 타입을 알려준다 String
console.log(typeof x1); // number 
x1 = '1234'; // 문자열로 바꿈 typeof로 다시한번x1을 출력하게 되면 String타입으로 나오게됨

console.log(Number.MAX_VALUE); // Number는 클래스 역할, Number가 가지고있는 메서드와 상수들이 있다. 

// indexOf()
let str = "please locate where 'locate' occurs!";
let pos = str.indexOf("locate"); // 7 출력 


// slice()
let str2 ="Apple, Banana, Kiwi";
let res = str.slice(7,13); // Banana 출력 


// replace()
let str3 = "Please visit Seoul and Seoul";
let n1 = str.replace("Seoul", "Jeju")  // Please visit Jeju and Seoul


// concate()
let text1 = "hello";
let text2 = "world";
let text3 = text1.concat("",text2); // hello world 출력 

var val;
var val2 = undefined;
console.log(val); // undefined 는 엄연히 자료형
// console.log(aaa); // 선언자체를 하지 않은 변수를 호출할때 not defined는 undefined와 다르게 오류다 

var n = null; 
console.log(typeof val);
console.log(typeof n); // object로 나온다 null은 개발자가 명시해서 사용한다 

console.log(x2.toFixed(1));

let obj = {
    firstrName : "john",
    lastName : "doe",
    age : 50,
    eyeColor : "blue",
    c:{a:10, b:20}
};
obj.age = 40;
obj["s#arp"] = 60; // 이렇게도 선언하여 추가가 가능하다
obj.job="student"; // 위에 선언하지 않았더라도 obj를 호출하게 되면 job을 추가해서 출력해준다 
delete obj.job; // job을 삭제 해준다

console.log(obj)
console.log(obj.age);
console.log(obj["lastName"], obj.lastName); // 둘이 같다 
console.log(obj.c.b);

let arr = [10, 30, 50, "a", true, {}, [1,2,3]]; 
console.log(arr);
console.log(arr.length); // 배열의 길이
console.log(arr[3]); // 배열의 3번째 인덱스 , 배열의 인덱스는 0부터 시작
arr[3]=100; // 배열의 3번째 인덱스값 변경 
console.log(arr[3]); // 100 출력 

let students = [
    {no:1, name:'홍길동',kor:90},
    {no:2, name:'김길동', kor:80}
];
console.log(students[1].name);

// 부동소수점 
// 8.625[10]
// 1000.101[2] = 1.000101 * 2^3
// 000101 3 

console.log((3.14).toString(2));
console.log((1026).toString(2));