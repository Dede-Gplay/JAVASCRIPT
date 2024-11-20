// // // variables in javascript
// // //let first_name = 'David';
// // //var last_name = 'John';
// // //let number = 10;
// // //let number2 =- 20;
// // // let x = x + y;
// // //let obj = [20, 10, 1, 30, 50, 12, 13, 15];

// // //function putout(){
// //    // console.log(first_name)
// // //}
// // //putout();

// // //function addition(){
// //     //console.log(first_name + ' ' + 'score' + ' ' + 4 + 5)
// // //}
// // //addition()
// // //function two(a, b, c){
// //     //return(a+b+c);
// //     //return(a-b-c);
// //     //console.log(a+b+c);
// //     //console.log(a-b-c);
// // //}
// // //two(10,5,5) 
// // let S_name = 'Dede'
// // let About = 'I am new to software development, and i switched career path from biologist to software development'

// // function myfunction(){
// //     document.getElementById("demo").innerHTML = S_name;
// //     document.getElementById("dm1").innerHTML = About;
// // }
// // function myfunction(){
// // document.getElementById("Try").innerHTML="TRY"
// // }

// // class User{
// //     constructor(name, email){
// //         this._name = name;
// //         this._email = email;
// //     }
// //     get UserEmail(){
// //         return this._email;
// //     }
// // }

// // const person = new User('Dede', 'dede123@gmail.com')
// // console.log(person.UserEmail)


// // data = ["34", "3", "9", "10"]
// // let x = ""
// // for(let i=0; i<data.length; i++);
// // document.getElementById().innerHTML

// // let u = 1;
// // let xc = "";
// // while(u <= 20){
// //     console.log(xc += u)
// //     u++
// // }

// // const drt = new Set(["c","f","f","f","t","y"])

// // for(cant of drt){
// //     console.log(xc+= cant)
// // }


// // for(cant in drt){
// //     console.log(xc+= cant)
// // }

// // const osfstudent = {
// //     Username: "Dede",
// //     Password: 454646,
// //     setof: 2024
// // }

// // let txt = "";
// // for(let x in osfstudent){
// //     console.log(txt +=osfstudent[x])
// // }

// // let username = "Dede";
// // if(username == "shola"){
// //     console.log("Welcome to Dashoard")
// // }else{
// //     console.log("Username not found")
// // }
// // let teacher = "";
// // let student = "";
// // let nonacademy = "";
// // if(teacher){
// //     console.log("I am a teacher")
// // }else if(student){
// //     console.log("I am a student")
// // }else if(nonacademy){
// //     console.log("I am a non-teaching staff")
// // }else{
// //     console.log("I am a visitor")
// // }

// // // Define states and capitals
// // const statesAndCapitals = {
// //     Abia: "Umahia",
// //     Adamawa: "Yola",
// //     Akwa Ibom: "Uyo",
// //     Anambra: "Uka",
// //     Bauchi: "Bauchi",
// //     Benue: "Makurdi",
// //     Connecticut: "Hartford",
// //     Delaware: "Dover",
// //     Florida: "Tallahassee",
// //     Georgia: "Atlanta",
// //     Hawaii: "Honolulu",
// //     // Add more states as needed
// //   };
  
// //   // Loop through the object and print each state with its capital
// //   for (const [state, capital] of Object.entries(statesAndCapitals)) {
// //     console.log(State: ${state}, Capital: ${capital});
// //   }
// const soup = new Map([
//     ["Egusi", 700],
//     ["Ogbono", 1200],
//     ["Ogbono", 1200],
//     ["Ogbono", 1200],
//     ["Ogbono", 1200],
// ]);
// soup.set("Ogbono",4000);
// soup.set("Egusi", 100);
// console.log(soup.get)

class Car{
    constructor(Year, Model){
        this.Year = Year;
        this.Model = Model
    }
    age(){
        const date = new Date();
        return date.getFullYear() -this.Year
    }
    speed(){
        return "The speed of the car is 290";
    }
}

const car1 = new Car(2002, "Toyota")
const car2 = new Car(2007, "Honda")
console.log(car1.age())



