// prop, method 
function Student(no, name, kor, eng, mat){
    this.no = no;
    this.name = name;
    var k = kor;
    this.eng = eng;
    this.mat = mat;

    this.getKor = function(){
        return k;
    }

    this.setKor = function(kor){
        k = kor;
    }

    this.total = function(){
        return this.kor + this.eng + this.mat;
    }
    this.avg = function(){
        return (this.total() / 3).toFixed(2);
    }
}

Student(1,"홍길동", 90, 80, 90);
let stud1 = new Student(1,"홍길동", 90, 80, 90);
// console.log(stud1.name);

// let students = [];
// students.push(stud1);
// students.push(new Student(2, "고길동", 89, 78, 67));
// students.push(new Student(3, "이길동", 70, 87, 45));

console.log(stud1.kor, stud1.eng, stud1.getKor());

// sort
arr = [
    {name:'김', score:50},
    {name:'이', score:70},
    {name:'박', score:90},
    {name:'최', score:30},
    {name:'정', score:1},
    {name:'전', score:11},
    {name:'양', score:12}
]

arr.sort(function(a,b){return a.score - b.score});
arr.reverse();

arr = [1,13,10,5,6,4];
arr.sort(function(a,b) {return a-b});
console.log(arr);

let set = new Set();
set.add(3);
set.add(1);
set.add(2);
set.add(6);
set.forEach(function(a){console.log(a)});
// console.log(set);

let obj = {a:1, b:2} // 오브젝트 
let m = new Map();
m.set("a",1);
m.set("b",2);

// 맵의장점 이러터블 

console.log(m)
console.log(m.get("a")); // 1

let s = m.entries();
console.log(s);

function max(){
    console.log(arguments) // n번 인덱스의 값들을 배열형태로 보여줌 
    let ret = arguments[0]
    for(let i in arguments){
        if(ret < arguments[i]){
            ret = arguments[i]
        }
    }
    return ret;
}
// console.log(max(10, 20,30, 40, 0, -10))
