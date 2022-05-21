
let stih = [
    "Бывает так",
    "Не ладится работа,",
    "И дома усидеть невмоготу.",
    "Творится рядом где-то что-то,",
    "И будто крови вкус во рту.",
]

for (let i=0; i < stih.length; i++){
    console.log(stih[i]);
    for(let j=0; j< stih[i].length; j++){
        console.log(stih[i][j]);
    }
}

//Посчитаем буквы "а" в каждой строке 
// let charATotalCounter = 0;
// for (let i=0; i< stih.length; i++){
//     console.log(stih[i]);
//     let charACounter = 0; //счетчик букв обнуляется 

//     for(let j=0; j< stih[i].length; j++){
//         if(stih[i][j].toLocaleLowerCase() == "а"){
//             charACounter++;
//             charATotalCounter++;
//         }
//     }
    
//     //Результат на каждую строку
//     console.log("Букв 'а' в строке всего: " + charACounter);
//     }
//     console.log("Букв 'a' всего: " + charATotalCounter);