let student = {};
student.no = 1;
student.name = '홍길동';
student.kor = 90;
student.eng = 80;
student.total = function(){
    return this.kor + this.eng;
};

// student.avg = () => {console.log(this)}; 
student.avg  = function() {return this.total() / 2};

console.log(student.total());
console.log(student.avg());

// indexOf();
let str = "abcd";
str.length = 20; 
console.log(str.length);
str = "aacasacaacac";
console.log(str.indexOf("cas",3)); // 못찾으면 -1 

/*
  이상 미만 
  slice = substring(시작위치, 종료위치 )
  substr (시작위치, 갯수)
*/
console.log(str.slice(-3));

console.log(str.replace("aa","fg")); // 처음 일치한것만 바꿈 
console.log(str.replace(/aa/g,"fg")); // 슬러시 이후 g를 붙이면 전부다 바꿔줌  

let id = "javaman";
let id2 = "batman";

function maskId(str){
    return str.slice(0,3).padEnd(str.length,"*");
}
console.log(maskId(id)); // jav****

console.log("abcde"[2]);
console.log("abcde".charAt(2)); // 위와같다 

str = "";
for(let i = 0 ; i < 26 ; i++){
    str += String.fromCharCode(65 + i);
}
console.log(str);

let str2 = "abcd"; // string 타입
let str3 = new String("abcd"); // object 타입

console.log(str2 == str3);
console.log(str2 === str3);

let num = 1234; 
// num = Strung(num); // 문자열 타입이 됨
// num = num.toString(); // 문자열이 됨 

num = 1.234567e3; 
console.log(num);

let arr = [1,2,3,'a','b'];
let result = arr.join("-");
console.log(result);

