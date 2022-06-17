//Assignment-4

//USER INPUT & CONDITIONAL STATEMENT
//Question-1
// var city = prompt("Enter the name of the city");
// if (city === "karachi") {
//     alert("Welcome to city of lights")
// }

//Question-2
// var gender = prompt("Enter your gender");
// if (gender === "male") {
//     alert("Good Morning Sir")
// }
// else if (gender === "female"){
//     alert("Good Morning Ma'am")
// }else {
//     alert("your gender is not match")
// }

//Question-3
// var signalColor = prompt('Enter signal color');
// if (signalColor === "Red"|| signalColor === "red") {
//     document.write(`<table>
//     <tr>
//     <th>"Signal color"</th>
//     <th>"Message"</th>
//     </tr>
//     <tr>
//     <td>${signalColor}</td>
//     <td>"Must Stop"</td>
//     </tr>
//     </table>`)
// }
// if (signalColor === "Yellow"|| signalColor === "yellow") {
//     document.write(`<table>
//     <tr>
//     <th>"Signal color"</th>
//     <th>"Message"</th>
//     </tr>
//     <tr>
//     <td>${signalColor}</td>
//     <td>"Ready to move"</td>
//     </tr>
//     </table>`)
// }
// if (signalColor === "Green"|| signalColor === "green") {
//     document.write(`<table>
//     <tr>
//     <th>"Signal color"</th>
//     <th>"Message"</th>
//     </tr>
//     <tr>
//     <td>${signalColor}</td>
//     <td>"Move now"</td>
//     </tr>
//     </table>`)
// }
// Question-4
// var fuel = +prompt("Enter remaing fuel in car");
// if (fuel < 0.25) {
//     alert("please refill the fuel in your car");
// }

//Question-5
//part-a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true")
// }
//part-b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for b is true")
// }
//part-c
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true")
// }
// if (++c < 14) {
//     alert("condition 3 is true")
// }
// if (c === 14) {
//     alert("condition 4 is true")
// }
//d
// var  materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
//e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
//f
// if ("car" < "cat") {
//     alert ("car is smaller than cat");
// }

//Question-6
// var sub1 = +prompt("Enter your first subject mark");
// var sub2 = +prompt("Enter your first subject mark");
// var sub3 = +prompt("Enter your first subject mark");
// var obtMark = sub1 + sub2 + sub3;
// var totalMark = 300;
// var per = (obtMark/totalMark) * 100;
// document.write (`<h1>Marks Sheet</h1>`)
// if ( per >= 80) {
//     document.write("Total marks "+ ": "+totalMark);
//     document.write("<br>")
//     document.write("Marks obtained "+ ": "+obtMark);
//     document.write("<br>")
//     document.write("percentage "+ ": "+per + "%");
//     document.write("<br>")
//     document.write("Grade "+ ": "+ " A+");
//     document.write("<br>")
//     document.write("Remarks "+ ": "+" Excellent");

// }
// else if (per >= 70) {
//     document.write("Total marks "+ ": "+totalMark);
//     document.write("<br>")
//     document.write("Marks obtained "+ ": "+obtMark);
//     document.write("<br>")
//     document.write("percentage "+ ": "+per + "%");
//     document.write("<br>")
//     document.write("Grade "+ ": "+ " A");
//     document.write("<br>")
//     document.write("Remarks "+ ": "+" Good");
// }
// else if (per >= 60) {
//     document.write("Total marks "+ ": "+totalMark);
//     document.write("<br>")
//     document.write("Marks obtained "+ ": "+obtMark);
//     document.write("<br>")
//     document.write("percentage "+ ": "+per + "%");
//     document.write("<br>")
//     document.write("Grade "+ ": "+ " B");
//     document.write("<br>")
//     document.write("Remarks "+ ": "+" You need to improve");
// } else {
//     document.write("Total marks "+ ": "+totalMark);
//     document.write("<br>")
//     document.write("Marks obtained "+ ": "+obtMark);
//     document.write("<br>")
//     document.write("percentage "+ ": "+per + "%");
//     document.write("<br>")
//     document.write("Grade "+ ": "+ " Fail");
//     document.write("<br>")
//     document.write("Remarks "+ ": "+" Sorry");
// }


//Question-7
// var userInput = +prompt("Please enter your guess number")
// var secretNumber = 2 
// if (userInput === secretNumber) {
//     alert("Bingo! Correct answer")
// }
// else if (userInput === 1) {
//     alert("Close enough to the correct answer")
// } else {
//     alert("your guess number is wrong");
// }

//Question-8
// var divisible = +prompt("We will check wether your number is divisible by 3 or not\nPlease enter the number");
// if (divisible %3 === 0 ) {
//     alert("Your number is divisible by 3")
// } else {
//     alert("your number is not divisible by 3")
// }

//Question-9
// var num = +prompt("We will check wether your number is odd or even\n Please enter the number")
// if (num %2 === 0) {
//     alert("your number is even")
// } else {
//     alert("your number is odd")
// }

//Question-10
// var temp = +prompt("Enter the temperature outside");
// if (temp > 40) {
//     alert("It is too hot outside")
// }
// else if (temp > 30) {
//     alert("The Weather today is Normal")
// }
// else if (temp > 20) {
//     alert("Today's Weather is cool")
// }
// else {
//     alert("OMG! Today's weather is so Cool")
// }

//Question-11
// var num1 = +prompt("Enter first number");
// var num2 = prompt("Enter the operator","+,-,/,%");
// var num3 = +prompt("Enter first number");
// if (num2 === "+") {
//     var add = num1 + num3;
//     alert("Addition of two number is : " +add)
// }
// else if (num2 === "-") {
//     var sub = num1 - num3;
//     alert("Subtraction of two number is : " +sub)
// }
// else if (num2 === "/") {
//     var divide = num1 / num3;
//     alert("Division of two number is : " +divide)
// }
// else if (num2 === "*") {
//     var mul = num1 * num3;
//     alert("Multiplication of two number is : " +mul)
// }else {
//     var mod = num1 % num3;
//     alert("Modolus of two number is : " +mod)
// }


//IF...ELSE & ELSE IF SATEMENT,TESTING SET OF CONDITIONS

//Question-2
// var int1 = +prompt("Enter your first integer");
// var int2 = +prompt("Enter your second integer");
// if (int1 > int2) {
//     alert(int1);
// }
// else if (int2 > int1) {
//     alert(int2);
// } else (
//     alert("Two integers are equal")
// )

//Question-3
// var input = +prompt("Enter a number", "positive,negative,zero");
// if (input > 0) {
//     alert("your input number is positive");
// }
// else if (input < 0) {
//    alert("your input number is negative")
// }else {
//     alert("your input number is zero")
// }

//Question-4
// var vowel = prompt("Check whether the character is vowel or not");
// if ( vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
//     alert("true")
// }
// else if (vowel === "y") {
//     alert("semivowel")
// }else {
//     alert("false");
// }

// Question-5 
// var password = "balghari123";
// var userInputPassword = prompt("Enter you password");
// if (userInputPassword === password) {
//     alert ("Correct! The password you entered matches the original password")
// }
// else if (userInputPassword === "") {
//     alert("Please enter your password")
// } else {
//     alert("Incorrect password")
// }

//Question-6
// var hour = 13;
// if (hour < 18) {
//     alert("Good day")
// }else {
//     alert("Good evening")
// }

//Question-7
// var time = +prompt("Please enter the time in 24 hours clock")
// if (time >= 0000 && time < 1200) {
//     alert("Good morning!")
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!")
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good evening!")
// }
// else if (time >= 2100 & 2359) {
//     alert("Good night!")
// } else {
//     alert("...")
// }


//ARRAYS
//Question 1-7
//1
// var arrayList = [];
//2
// var arrayList = new array();
//3
// var stringArray = ["table","copy","pencil","pen"]
//4
// var numberArray = [1,2,3,4,5,6,7,8,9];
//5
// var booleanArray = [true,false];
//6
// var mixArray = ["ali",3,"nasir",6,"ahmad",7,"apple"]
//7
// var availableEduQuaInPak = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
// document.write("<h1>Qualifications:</h1>");
// document.write("<br>")
// document.write("1 ) "+availableEduQuaInPak[0]);
// document.write("<br>")
// document.write("2 ) "+availableEduQuaInPak[1]);
// document.write("<br>")
// document.write("3 ) "+availableEduQuaInPak[2]);
// document.write("<br>")
// document.write("4 ) "+availableEduQuaInPak[3]);
// document.write("<br>")
// document.write("5 ) "+availableEduQuaInPak[4]);
// document.write("<br>")
// document.write("6 ) "+availableEduQuaInPak[5]);
// document.write("<br>")
// document.write("7 ) "+availableEduQuaInPak[6]);
// document.write("<br>")
// document.write("8 ) "+availableEduQuaInPak[7]);

//Question-8
// var names =["Michael","John","Tony"];
// var scores = [320,230,480];
// var totalMarks = 500;
// var percentages = [scores[0]/totalMarks * 100, scores[1]/totalMarks * 100, scores[2]/totalMarks * 100]
// document.write("Score of "+names[0]+" is "+scores[0]+". Percentage: "+percentages[0]+"%");
// document.write("<br>")
// document.write("Score of "+names[1]+" is "+scores[1]+". Percentage: "+percentages[1]+"%");
// document.write("<br>")
// document.write("Score of "+names[2]+" is "+scores[2]+". Percentage: "+percentages[2]+"%");

//Question#9
var colorNames = ["red","green", "yellow", "white", "purple", "blue"]
//part-a
// var enterColorName = prompt("Please enter the color name which you want to add")
// console.log(colorNames.unshift(enterColorName));
// console.log(colorNames);
//part-b
// var addToEnd = prompt("Please enter the color which you want add to the end");
// console.log(colorNames.push(addToEnd));
// console.log(colorNames);
//part c
// colorNames.unshift("gray","orange");
// console.log(colorNames);
//part-d
// colorNames.shift();
// colorNames.shift();
// console.log(colorNames);
//part-e
// colorNames.pop();
// console.log(colorNames);
//part-f
// var indexNum = +prompt("Enter the index number");
// var addColor = prompt("Enter the color name");
// colorNames.splice(indexNum, 0, addColor);
// console.log(colorNames);
//part-g
// var indexNum = +prompt("Enter the index number");
// var deleteItem = +prompt("how many you want to delete from the list")
// colorNames.splice(indexNum,deleteItem);
// document.write(colorNames);

//Question-10
// var number =[320, 230, 480, 120]
// document.write("Scores of Students "+number + "<br>");
// number.sort();
// document.write("Ordered Scores of Students : " +number)

//Question-11
// var citiesName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var newList = citiesName.slice(2,4);
// document.write("Cities list: "+"<br>"+ citiesName +"<br>");
// document.write("<br>")
// document.write("<br>")
// document.write("Selected cities list:" + "<br>" + newList);

//Question-12
// var arr = ["This", "is", "my", "cat"];
// var newArr= arr.join(" ")
// document.write("Array:" +"<br>"+ arr+ "<br>")
// document.write("<br>")
// document.write("<br>")
// document.write("String:"+"<br>" +newArr)

//Question-13
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices:"+"<br>"+devices+"<br>")
// document.write("<br>")
// document.write("<br>")
// var keyboard = devices.shift();
// document.write("Out:"+"<br>"+keyboard+"<br>")
// document.write("<br>")
// var mouse = devices.shift();
// document.write("Out:"+"<br>"+mouse+"<br>")
// document.write("<br>")
// var printer = devices.shift();
// document.write("Out:"+"<br>"+printer+"<br>")
// document.write("<br>")
// var monitor = devices.shift();
// document.write("Out:"+"<br>"+monitor+"<br>")

//Question-14
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices:"+"<br>"+devices+"<br>")
// document.write("<br>")
// document.write("<br>")
// var keyboard = devices.pop();
// document.write("Out:"+"<br>"+keyboard+"<br>")
// document.write("<br>")
// var mouse = devices.pop();
// document.write("Out:"+"<br>"+mouse+"<br>")
// document.write("<br>")
// var printer = devices.pop();
// document.write("Out:"+"<br>"+printer+"<br>")
// document.write("<br>")
// var monitor = devices.pop();
// document.write("Out:"+"<br>"+monitor+"<br>")

//Question-15
var phoneStore = ["Apple", "Samsung","Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>"+"<Option>"+phoneStore[0]+"</option>"+
                          "<Option>"+phoneStore[1]+"</option>"+
                          "<Option>"+phoneStore[2]+"</option>"+
                          "<Option>"+phoneStore[3]+"</option>"+
                          "<Option>"+phoneStore[4]+"</option>"+
                          "<Option>"+phoneStore[5]+"</option>"+
                "</select>")





