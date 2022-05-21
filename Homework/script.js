// ((1)) Задачки математические


//  *1* Пользователь вводит 2 числа, вывести квадрат каждого числа.

//let sifra1= prompt('Введите первое число');
//let sifra2= prompt('Введите второе число');
// alert(sifra1*sifra1);
// alert(sifra2*sifra2);


// *2* Дано значение (пользователь вводит) в Фаренгейтах, вывести это же значение в Цельсии.
 
// let farengeit= prompt('Введите значение Фаренгейта');
// alert((`${farengeit}`-32)*(5/9));


// *3* Дано число x. Выведите x, 2x, 3x, 4x и 5x, разделенных тремя дефисами, как показано ниже.

// let x=prompt('Введите число ');
// alert(`${x}'---'${2*x}'---'${3*x}'---'${4*x}'---'${5*x}`);


// *4* Напишите программу, которая запрашивает у пользователя вес в килограммах и конвертирует его в фунты. В килограмме 2,2 фунта.

// let kg= prompt('Сколько килограмм');
// alert(`${kg*2.2}`);


// *5* Напишите программу, которая просит пользователя ввести три числа (используйте три отдельных оператора ввода). Создайте переменные с именами total и average, которые содержат сумму и среднее значение трех чисел, и распечатайте значения total и average.

// let number1 = parseInt(prompt('Введите первое число'));
// let number2=  parseInt(prompt('Введите второе число'));
// let number3= parseInt(prompt('Введите третье число'));

// let total= number1+number2+number3;
// let average= total / 3;
// alert("total" + total );
// alert("average" + average);




// *6* Пользователь вводит число (цена за обед) и программа должна расчитать процент за обслуживание (15%) и добавить этот процент к итоговому счету. Надо вывести итоговый счет.

// let a=parseInt(prompt("Введите цену за обед"));
// let procent= a/100;
// let procent2= procent * 15;
    
// alert(procent2+a)








// ((2)) Задачки на strings (строки)
// *1* Попросить пользователя ввести имя и вывести alert с сообщением “Здравствуйте, {имя}!!! Мы рады видеть вас”. Где вместо {имя} будет введенное имя.

//  let username= prompt('Введите Ваше имя!');
//  alert('Здраствуйте '+`${username}`+'. Мы рады видеть Вас!');


// *2*Попросить пользователя ввести наименование города и вывести из скольких букв оно состоит.
  
// let sity= prompt('Введите название Вашего города!');
// alert(sity.length);


// *3*Пользователь вводит свое имя и число (место буквы). Надо вывести какая буква находится под этим номером (числом).
  
// let words = prompt("Введите имя");
// let placeOFSymbol = prompt("Место буквы");

//  let place = parseInt(placeOFSymbol);
//  let neededSymbol = words[place];

//  let needed = words[parseInt(placeOFSymbol)];
//  alert(neededSymbol)

// *4* Пользователь вводит предложение, надо вывести предложение где все буквы заглавные.
 
// let bagname= prompt('Введите предложение!');
// alert(bagname.toUpperCase())

// ((3)) Задачки на if (условния)
// *1* Даны 3 целых числа. Вывести наибольшее из них. 

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


// *2* Даны 3 вещественных числа a,b,c. Существует ли треугольник со сторонами a,b,c.


// let a= parseInt(prompt("Сторона а:"));
// let b= parseInt(prompt("Сторона b:"));
// let c= parseInt(prompt("Сторона c:"));
// if(a+b>c && a+c>b && c+b>a){
//     alert("Треугольник существует")
// }
// else{
//     alert("Треуголник не существует")
// }
    

// *3* Дано 3 целых числа. Вывести их в порядке возрастания. 

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

// *4* Дано целое число. Верно ли, что оно делится на 5 и на 7? 

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

// *5*Даны два целых числа. Верно ли, что они заканчиваются на одну и ту же цифру? 
 

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

// *6* Дано четырехзначное число. Верно ли, что сумма двух крайних цифр равна сумме двух средних?
 
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

// *7* Дано 5 целых чисел. Вывести наибольшее из них.

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
   

// *8* Расширение задачи 
// “Пользователь вводит свое имя и число (место буквы). Надо вывести какая буква находится под этим номером (числом).”
// Если пользователь вводит число больше чем количество букв в имени или вводит отрицательное число, выводить ссобщение что буквы под таким числом в имени нет

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


// ((4)) Задачки на Loops (циклы)

// *1* Пользователь вводит предложение. Вывести каждый символ из предложения отдельно в каждой строке. 

// let p = prompt("Введите предложение");

// for (let i=0; i < p.length; i++){
//     console.log(p[i]);
// }

//  *2* Дано целое положительное число N. Найти сумму квадратов всех натуральных чисел от 0 до N.
 
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
  
// *3* (вложенным циклом) Дано целое число N. 

// Вычислить с точностью 2 знака после запятой.
// Где n!

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


// *4* Последовательность Фибоначчи определяется следующим образом: первые два члена последовательности равны 1, а каждый следующий равен сумме двух предыдущих. Т.е. числами Фибоначчи являются 1,1,2,3,5,8,13,… . Вводится номер N. Определить N-е по порядку число Фибоначчи. 

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

// *5* Пользователь вводит произвольное число N. Далее программа просит ввести N раз числа на каждый ввод, выводится alert с сообщением что число четное (если делится на 2 без остатка) или нечетное.

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

// *6* Вводится предложение с лишними символами 
// “Write  a program   that asks the user to enter a number….
// function isAlpha(str){
//     let regexp = /\w/;
//     let matches_array = str.match(regexp);
//     if(matches_array !=null){
//         return true;
//     }
//     return false
// }

// let text ="Write  a program   that asks the user to enter a number....";
// let mustext = ""

// for(let i=0; i <= text.length-1; i++){
//     if(text[i] == text[i+1] && !isAlpha(text[i]+'')){

//     }
//     else{
//         mustext = mustext + text[i]
//     }

// }
// console.log(mustext)
// console.log("------")
// console.log(text)

// ((5)) Задачки на Nested Loops (вложенные циклы)

// *1*  Выведите прямоугольник, используя числа 0-9, с входными размерами n*m, где n — длина и m — высота.

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


// *2* Задача на сортировку массива чисел. Нельзя использовать готовые функции, напишите программу которая сортирует массив.


// let arr = [3,19,2,22,33,1];

// arr.sort((a, b) => b - a);


// alert (arr);


// *3* 
// Посчитать количество артиклей в тексте. Где артикли это 'a', 'an', 'the'.
 

// let multilineString ="If the stars should appear one night in a thousand years, how would  men  believe and  adore,  and  preserve  for  many  generations the remembrance of the city of God?' EMERSON Aton 77, director of Saro  University, thrust  out a  belligerent lower lip and glared at the young newspaperman in a hot fury.Theremon 762 took that  fury in his  stride. In his earlier  days, when his  now widely syndicated column was  only a mad idea  in a cub  reporter's mind,  he  had  specialized  in 'impossible'  interviews.  It  had  cost him bruises, black  eyes, and broken bones; but it had given him an ample supply of coolness and self-confidence. So he  lowered the outthrust  hand that had been so pointedly ignored  and calmly  waited  for the aged director to  get over the  worst. Astronomers were queer ducks, anyway, and if Aton's actions of the last two months meant anything; this same Aton was the queer-duckiest of the lot."
// let counter = 0; 
// const myArray = multilineString.split(" ");

// for(let i=0; i<myArray.length; i++) {
//     if(myArray[i] == "a" ||  myArray[i] == "an" || myArray[i] == "the") {
//         counter++
//     }
// }
// alert(counter)