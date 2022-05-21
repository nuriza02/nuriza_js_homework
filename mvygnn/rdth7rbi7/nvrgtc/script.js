// objects

const user ={
    name: "Sam",
    surname: "Smith",
    age:30,
    address: {
        country: "UK",
        city: "London",
        street: "Some street"
    }
}

const user1 = {
    name: "Nuriza",
    surname: "Akzholova",
    age:21,
    address: {
        country: "Kyrgyzstan",
        city: "Osh",
        street: "Datka"
    }
}
const user2 = {
    name: "Ruslan",
    surname: "Maturaimov",
    age:21,
    address: {
        country: "Kyrgyzstan",
        city: "Batken",
        street: "Alay"
    }
}
function changeAddress(currentUser, newCountry, newCity, newStreet){
    currentUser.address.city = newCity
    currentUser.address.country = newCountry
    currentUser.address.street = newStreet  
}

function printInfo(currentUser){
console.log("------------");
console.log(currentUser.name);
console.log(currentUser.surname);
console.log(currentUser.age);
console.log(currentUser.address.country);
console.log(currentUser.address.city);
console.log(currentUser.address.street);
console.log("+++++++++++++++++++++");
} 
//Действие ниже идут
printInfo(user);

user.name = "Rob";

printInfo(user);


changeAddress(user,"Kyrgyzstan", "Bishkek", "Chuy");
printInfo(user);

changeAddress(user1,"Kyrgyzstan", "Osh", "Datka");
printInfo(user1);

changeAddress(user2,"Kyrgyzstan", "Osh", "Alay");
printInfo(user2);
