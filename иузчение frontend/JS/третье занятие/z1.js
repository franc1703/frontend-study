// функции, параметры функции
// function sum() {
//     let result = 0;
//     for (const n of arguments)
//         result += n;
//     console.log(result);
// }
// sum(6);
// sum(6, 4)
// sum(6, 4, 5)


// function display(season, ...temps) {
//     console.log(season);
//     for (index in temps) {
//         console.log(temps[index]);
//     }
// }
// display("весна", -2, -3, 4, 6, 2);
// display("Leto", 15, 20, 35, 26);



// результат функции


// function sum(a, b) {
//     return a + b;
// }
// let num1 = sum(2, 4);
// console.log(num1);

// const num2 = sum(6, 34);
// console.log(num2);



//   Возвращение функции из функции

// function menu(n) {
//     if (n == 1) return function (x, y) { return x + y }
//     else if (n == 2) return function (x, y) { return x - y }
//     else if (n == 3) return function (x, y) { return x * y }
//     return function(){return0;}
// }
// const action = menu(1);
// const result = action(2,19000);
// console.log(result);
//В данном случае функция menu() в зависимости от переданного в нее значения возвращает одну из трех функций или пустую функцию, которая просто возвращает число 0.
// Далее мы вызываем функцию menu и получаем результат этой функции - другую функцию в константу action "строка 40".
// То есть здесь action будет представлять функцию, которая принимает два параметра и возвращает число. Затем черещ имя константы мы можем вызвать эту функцию и получить ее результат в константу result "строка 41".
// + пример

// function menu(n){

//     if(n==1) return function(x, y){ return x + y;}
//     else if(n==2) return function(x, y){ return x - y;}
//     else if(n==3) return function(x, y){ return x * y;}
//     return function(){ return 0;};
// }

// let action = menu(1);
// console.log(action(2, 5));  

// action = menu(2);
// console.log(action(2, 5));       

// action = menu(3);
// console.log(action(2, 5));     

// action = menu(190);
// console.log(action(2, 5));



// Глобальные переменные

//Все переменные и константы, которые объявлены вне функций, являются глобальными:

// var a = 5;
// let b = 8;
// const c = 9;
// function displaySum() {
//     var d = a + b + c;
//     console.log(d)
// }
// displaySum();
//Здесь переменные a и b и константа c являются глобальными. Они доступны из любого места программы. А вот переменная d глобальной не является, так как она определена внутри функции и видна только в этой функции.


//Переменные и константы функции. Переменные и константы, определенные внутри функции, видны (то есть могут использоваться) только внутри этой функции.

// function print(){
// let b = 8;
//     const c = 9;
//     var a=5;
//     console.log("Function print: a =", a);
//     console.log("Function print: b =", b);
//     console.log("Function print: c =", c);
// }
// print();
// console.log("Global: a =", a);
//Переменные a и b и константа c являются локальными, они существуют только в пределах функции. Вне функции их нельзя использовать, поэтому мы получим "ошибку в строке 102 (Uncaught ReferenceError: a is not defined)"ю


//Рекурсивные функции

// function getFactorial(n){
//     if (n === 1){
//     return 1;
// }
// else{
//     return n * getFactorial(n - 1);
// }
// }
// var result = getFactorial(8)
// console.log(result);
//Функция getFactorial() возвращает значение 1, если параметр n равен 1, либо возвращает результат опять же функции getFactorial, то в нее передается значение n-1/


//Переопределение функций

// function display(){
//     console.log("Доброе утро");
//     display = function(){
//         console.log("добрый день");
//     }
// }
// display();
// display();


// var x
// var x

// let x // присвоено начальное значение нельзя)
// let x //NAN

// let isAlive;
// console.log(isAlive);


// let a = "daniil"
// let g = "20"
// let d = "chuvash"
//  let c = `name: ${a} age: ${g} region: ${d}`;
//  console.log(c);

// var a = "daniil";
// var g = "20";
// var d = 10;
// var q = a + ' ' + g + ' ' + d;
// console.log(q);

// let f = `${a} ${g} ${d}`;
// document.writeln(f);
// document.writeln("<br>");

// var h = a.concat(" ");
// document.writeln(h);
// document.writeln("<br>");

// var l = h.concat(g);
// document.writeln(l);
// document.writeln("<br>");
// var n = l.concat(" ");

// var z = n.concat(d);
// document.writeln(z);
// document.writeln("<br>");

// var m = a.concat(" ").concat(g).concat(" ").concat(d).toUpperCase();
// document.writeln(m);
// document.writeln("<br>");

// var k = a.concat(" ",g," ", d);
// document.writeln(k);

// let c = 15;
// let v = "15";
// let p = c == v;
// document.writeln("<br>" + p);
// let i = 15;
// let u = 15;
// let y = i === u;
// document.writeln("<br>" + y);

// var s = 15;
// var t = 40;
// var e = 

// const stringToNumber = function(str){
//     var str = "1234";
//     var str = "605";
//     var str = "1405";
//     var str = "-7";
//     var num = Number(str);

//     return null;
//   }

  function squareSum(numbers){
    for (1**2 + 2**2 +2**2)


    }
    
  