// function Student(no, name, kor, eng, mat){
//     this.no = no;
//     this.name = name;
//     this.kor = kor;
//     this.eng = eng;
//     this.mat = mat;
// }

// Student.prototype.total = function(){
//     return this.kor + this.eng + this.mat;
// }
// Student.prototype.avg = function(){
//     return (this.total() / 3).toFixed(2);
// }
// Student.prototype.value = 10;

// Student.getClassNo = function(){
//     return 206;
// }

// Student.value = 20;
// // js prototype : 생성자 함수를 통해 정의된 객체들의 공용 공간

// let stud1 = new Student(10,"자바맨", 90, 100, 50);
// console.log(stud1.total(), stud1.avg(), stud1.value, Student.getClassNo(), Student.value);

// for(var i in stud1){
//     console.log(1, stud1[i]);
// }

// // 날짜 객체에 함수를 추가 
// Date.prototype.nextDay = function(n){
//     // n = n || 1; 
//     // !n ? 1 : n;
//     this.setTime(this.getTime() + 1000 * 60 * 60 * 24 * (n || 1));
//     return this;
// }
// let now = new Date(); // 2023-02-23 16:43:XX
// now.nextDay(6); 
// console.log(now);


let arr = [1,3,5,7];
// 원래 배열에 변화가 생긴다
// push, unshift
// pop, shift
// splice, sort,

arr.slice(1); // slice를 한다고해도 원래 배열에 변화가 생기진 않는다.
let arr2 = arr.slice(1); // 이렇게 따로 변수를 만들어줘서 넣어주면 arr2에는 넣어준 값으로 정의 된다 

arr.push(9); // add와 같은 역할
arr.unshift(11); // 배열의 맨 앞에 요소를 추가하고 배열의 길이를 반환
console.log(arr);

arr.pop(); // 마지막데이터를 제거하고 마지막 데이터를 반환
arr.shift();
console.log(arr); 

Array.prototype.remove = function(n){
    arr.splice(n,1);
};
arr.remove(2)
console.log(arr);
