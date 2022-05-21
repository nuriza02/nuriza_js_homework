// let param = 5;
// console.log(param);

// let stringParam = "Привет,мир";
// console.log(stringParam);



// let booleanVal = true;
// console.log(booleanVal);


// if (4>5){
//   console.log("Первый if");
//   console.log("Число 4 больше 5");
// }

// if(4<5){
//      console.log("Второй if");
//      console.log("Число 4 меньше 5");
// }


/*
// Условные операции if, else
// Ввод данных
let userAge = prompt("Введите свой возраст");
console.log(typeof(userAge));

userAge = parseInt(userAge); // присвоение
console.log(typeof(userAge));

let discountHolderStr = prompt("Введите есть ли у вас дисконт (да/нет)");
let discountHolder = false;


// Вычисления
if (discountHolderStr.toLowerCase() == "да") // два == это сравнение
{ 
    discountHolder = true;
}

if (discountHolderStr.toLowerCase() == "нет"){
    discountHolder = false;
}
// toLowerCase() это функция которая приводит все в маленькие буквы
// Вывод результатов
alert("Вам " +  userAge + " лет." );
if(discountHolder){
    alert("У вас есть дисконтная карта");
} else {
    alert("У вас нет дисконтной карты");
}
*/


//1 Дз
//let sifra1= prompt('Введите первое число');
//let sifra2= prompt('Введите второе число');
// alert(sifra1*sifra1);
// alert(sifra2*sifra2);


//2 Дз
// let farengeit= prompt('Введите значение Фаренгейта');
// alert((`${farengeit}`-32)*(5/9));


//3 Дз
// let x=prompt('Введите число ');
// alert(`${x}'---'${2*x}'---'${3*x}'---'${4*x}'---'${5*x}`);


//4 Дз
// let kg= prompt('Сколько килограмм');
// alert(`${kg*2.2}`);


//5 Дз
// let number1 = parseInt(prompt('Введите первое число'));
// let number2=  parseInt(prompt('Введите второе число'));
// let number3= parseInt(prompt('Введите третье число'));

// let total= number1+number2+number3;
// let average= total / 3;
// alert("total" + total );
// alert("average" + average);




//6 Дз
// let a=parseInt(prompt("Введите цену за обед"));
// let procent= a/100;
// let procent2= procent * 15;
    
// alert(procent2+a)













//Задача 2
//  let username= prompt('Введите Ваше имя!');
//  alert('Здраствуйте '+`${username}`+'. Мы рады видеть Вас!');


//2 
// let sity= prompt('Введите название Вашего города!');
// alert(sity.length);


//3 
// let words = prompt("Введите имя");
// let placeOFSymbol = prompt("Место буквы");

//  let place = parseInt(placeOFSymbol);
//  let neededSymbol = words[place];

//  let needed = words[parseInt(placeOFSymbol)];
//  alert(neededSymbol)

//4 
// let bagname= prompt('Введите предложение!');
// alert(bagname.toUpperCase())

//Задача 3 1
// let a= parseInt(prompt('Ввести перввое число'));
// let b= parseInt(prompt('Ввести второе число'));
// let c= parseInt(prompt('Ввести третье число'));
// if(a>b && a>c){
//     alert(a)
// }
// else if(b>a && b>c){
//     alert(b)
// }
// else{
//     alert(c)
// }


//2 ;

// let a= parseInt(prompt("Сторона а:"));
// let b= parseInt(prompt("Сторона b:"));
// let c= parseInt(prompt("Сторона c:"));
// if(a+b>c && a+c>b && c+b>a){
//     alert("Треугольник существует")
// }
// else{
//     alert("Треуголник не существует")
// }
    

//3 3
// var a= parseInt(prompt("Введите первое число"));
// var b= parseInt(prompt("Введите второе число"));
// var c= parseInt(prompt("Введите третье число"));

// if (a > b) {
//     let temp = a
//     a = b
//     b =temp
// } 

// if (b > c) {
//     let temp = b
//     b = c
//     c =temp
// }

// if (a > b) {
//     let temp = a
//     a = b
//     b =temp
// }

// alert(a + ", " + b + ", " + c)

// 3 4

// let nm = Number(prompt(Введите целое число)); 
// let i = 0;  
// while (i != 10000350) { 
//     i++; 
//     if (nm % 5 === 0 && nm % 7 === 0 ) { 
//         alert(nm + " Данное число делится на 5 и 7"); 
//         nm = Number(prompt()); 
//         if(nm == String("s")) { 
//             break; 
//         }         
//     }  
//     else { 
//         alert(nm + " Данное число не делится на 5 и 7"); 
//         nm = Number(prompt()); 
//         if(nm == String("s")) { 
//             break; 
//         } 
//     } 
// }
 
// theSameLater();

// 3 5

// const aStr = prompt("Введите целое число"); 
// const bStr = prompt("Введите целое число"); 
 
// function theSameLater() { 
//     if(aStr[aStr.length-1] === bStr[bStr.length-1]) { 
//         alert("Верно") 
//     } else { 
//         alert("Неверно") 
//     } 
// } 
 
// theSameLater();

// 3 6 
// var n = parseInt(prompt('Введите четырехзначное число'));

// var side = n%10 + parseInt(n/1000)
// n = parseInt(n/10)
// var mid = n%10
// n = parseInt(n/10)
// mid = mid + n%10
// if( mid==side)
// alert("Верно")
// else{
//     alert("Неверно")
// }
// 

// 3 7
// let a= parseInt(prompt('Введите  первое число'));
// let b= parseInt(prompt('Введите  второе число'));
// let c= parseInt(prompt('Введите  третье число'));
// let d= parseInt(prompt('Введите четвертое число'));
// let i= parseInt(prompt('Введите пятое число'));
// if(a>b && a>c&& a>d && a>i){
//     alert(a)
// }
// else if(b>a && b>c&& b>d && b>i){
//     alert(b)
// }
// else if(c>a && c>b && c>d&& c>i){
//     alert(c)
// }
// else {
//     alert(i)
// }
   

// 3 8 

// let words = prompt("Введите имя");
// let placeOFSymbol = prompt("Место буквы");

//  let place = parseInt(placeOFSymbol);
//  let neededSymbol = words[place];
//  if(words.length > placeOFSymbol){
//     let needed = words[parseInt(placeOFSymbol)];
//     alert(neededSymbol)  
//  } 
//     else{
//        alert("Буквы под таким числом в имени нет")
// }


// 4 1
// let p = prompt("Введите предложение");

// for (let i=0; i < p.length; i++){
//     console.log(p[i]);
// }

// 4 2
// let ch = parseInt(prompt("Введите число"));
// let summOFNumbers = 0; 
// console.log("N is: " + ch);
// for(let i = 0; i<=ch; i++){
//          let multipleToTwo = 0;
//          if(i>0){
//              multipleToTwo = i*2;
//              console.log(multipleToTwo)
//          }
//          summOFNumbers += multipleToTwo;
//     }
//     console.log("Summ is: " + );
//     alert("Сумма чисел: " + summOFNumbers);
  
// 4 3
// let num = 5;
// let sum = 0;
// for(let i=0; i <=num; i++){
//     let factorial =1;
//     for(let  j=1; j<=i; j++){
//         factorial = factorial*j
//     }
//     let delenie = 1/factorial;
//     console.log(delenie);
//     sum += delenie

// }
// alert(sum.toFixed(2));


// 4 4
// let num = 6;
// let one = 0;
// let two = 1;

// for(let i = 1; i <=num; i++) {
//     let current = one + two;

//     one = two;
//     two = current;

//     console.log(current);
// }
// console.log("1,1,2,3,5,8,13,...")

// 4 5
// let n = parseInt(prompt("Введите число"));
// for (let i = 1; i <= n; i++) {
//     let t = parseInt(prompt("Введите число"));
//     if (t % 2 == 0) {
//       alert( "Четное" );
//     }
//     else{
//         alert("Нечетное")
//     }
//   }

// 4 6
// function isAlpha(str){
//     let regexp = /\w/;
//     let matches_array = str.match(regexp);
//     if(matches_array !=null){
//         return true;
//     }
//     return false
// }

// let Text ="Write  a program   that asks the user to enter a number….";
// let mustext = ""

// for(let i=0; i <= Text.length-1; i++){
//     if(Text[i] == Text[i+1] && !isAlpha(Text[i]+'')){

//     }
//     else{
//         mustext = mustext + Text+[i]
//     }

// }
// console.log("mustext")
// console.log("------")
// console.log(Text)

// 5 1
//  let n =parseInt(prompt("Введите цифру"));
//  let m =parseInt(prompt("Введите цифру"));

//  for(let i=0; i<m; i++){
//     let s = "";
//     for( let j=0; j<n; j++){
//         s += j + " ";
//     }
//     console.log(s)
//     console.log("\n")
//  }


// 5 2

// let arr = [3,19,2,22,33,1];

// arr.sort((a, b) => b - a);


// alert (arr);


// 5 3 

// let multilineString ="If the stars should appear one night in a thousand years, how would  men  believe and  adore,  and  preserve  for  many  generations the remembrance of the city of God?' EMERSON Aton 77, director of Saro  University, thrust  out a  belligerent lower lip and glared at the young newspaperman in a hot fury.Theremon 762 took that  fury in his  stride. In his earlier  days, when his  now widely syndicated column was  only a mad idea  in a cub  reporter's mind,  he  had  specialized  in 'impossible'  interviews.  It  had  cost him bruises, black  eyes, and broken bones; but it had given him an ample supply of coolness and self-confidence. So he  lowered the outthrust  hand that had been so pointedly ignored  and calmly  waited  for the aged director to  get over the  worst. Astronomers were queer ducks, anyway, and if Aton's actions of the last two months meant anything; this same Aton was the queer-duckiest of the lot."
// let counter = 0; 
// const myArray = multilineString.split(" ");

// for(let i=0; i<myArray.length; i++) {
//     if(myArray[i] == "a" ||  myArray[i] == "an" || myArray[i] == "the") {
//         counter++
//     }
// }
// alert(counter)