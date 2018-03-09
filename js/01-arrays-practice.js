/*//STEP 1
var favoriteMovies = ["Movie", "Movie2", "Movie3", "Movie4"];
window.console.log(favoriteMovies[1]);
//STEP 2
var movies = new Array(5);
movies[0] = "Movie1";
movies[1] = "Movie2";
movies[2] = "Movie3";
movies[3] = "Movie4";
movies[4] = "Movie5";
movies[5] = "Movie6";
window.console.log(movies[0]);
window.console.log(movies.length);

//STEP 3
var moviesLiteral = [];

moviesLiteral.push("Movie1");
moviesLiteral.push("Movie2");
moviesLiteral.push("Movie3");
moviesLiteral.push("Movie4");
moviesLiteral.push("Movie5");
moviesLiteral.push("Movie6");
moviesLiteral.shift();
window.console.log(moviesLiteral.join(" "));
//STEP 4
var moviesLiteral = [];
var i;
moviesLiteral.push("Movie1");
moviesLiteral.push("Movie2");
moviesLiteral.push("Movie3");
moviesLiteral.push("Movie4");
moviesLiteral.push("Movie5");
moviesLiteral.push("Movie6");
moviesLiteral.push("Movie7");


for (i = 0; i <= moviesLiteral.length; i += 1) {
	window.console.log(moviesLiteral[i]);
	
}


//STEP 5
var moviesLiteral = [];
moviesLiteral.push("Movie1");
moviesLiteral.push("Movie2");
moviesLiteral.push("Movie3");
moviesLiteral.push("Movie4");
moviesLiteral.push("Movie5");
moviesLiteral.push("Movie6");
moviesLiteral.push("Movie7");

for (var i in moviesLiteral) {
	window.console.log(moviesLiteral[i]);
}


//STEP 6
var moviesLiteral = [];
moviesLiteral.push("Movie1");
moviesLiteral.push("Movie2");
moviesLiteral.push("Movie3");
moviesLiteral.push("Movie4");
moviesLiteral.push("Movie5");
moviesLiteral.push("Movie6");
moviesLiteral.push("Movie7");

for (var i in moviesLiteral) {
	window.console.log(moviesLiteral.sort());
}
//STEP 7
var moviesLiteral = [];
moviesLiteral.push("Movie1");
moviesLiteral.push("Movie2");
moviesLiteral.push("Movie3");
moviesLiteral.push("Movie4");
moviesLiteral.push("Movie5");
moviesLiteral.push("Movie6");
moviesLiteral.push("Movie7");

for (var i in moviesLiteral) {
	window.console.log(moviesLiteral[i]);
}





//STEP 8
var moviesLiteral = [];
moviesLiteral.push("Movie1");
moviesLiteral.push("Movie2");
moviesLiteral.push("Movie3");
moviesLiteral.push("Movie4");
moviesLiteral.push("Movie5");
moviesLiteral.push("Movie6");
moviesLiteral.push("Movie7");


for (var i in moviesLiteral) {
	window.console.log(moviesLiteral[i]);
}
var leastFavoriteMovies = ["leastFav1","leastFav2","leastFav3","leastFav4"];

windoconsole.log("Movies I like: \n\n" + moviesLiteral.join("\n") + " \n " + "\nMovies I regret watching: \n\n" + leastFavoriteMovies.join("\n"));

var reverseSort = moviesLiteral.concat(leastFavoriteMovies);
window.console.log(reverseSort.reverse);

//STEP 9
var moviesLiteral = [];
moviesLiteral.push("Movie1");
moviesLiteral.push("Movie2");
moviesLiteral.push("Movie3");
moviesLiteral.push("Movie4");
moviesLiteral.push("Movie5");
moviesLiteral.push("Movie6");
moviesLiteral.push("Movie7");


for (var i in moviesLiteral) {
	window.console.log(moviesLiteral[i]);
}
var leastFavoriteMovies = ["leastFav1","leastFav2","leastFav3","leastFav4"];

window.console.log("Movies I like: \n\n" + moviesLiteral.join("\n") + " \n " + "\nMovies I regret watching: \n\n" + leastFavoriteMovies.join("\n"));

var reverseSort = moviesLiteral.concat(leastFavoriteMovies);
reverseSort = reverseSort.pop();
window.console.log(reverseSort);



//STEP 10
var moviesLiteral = [];
moviesLiteral.push("Movie1");
moviesLiteral.push("Movie2");
moviesLiteral.push("Movie3");
moviesLiteral.push("Movie4");
moviesLiteral.push("Movie5");
moviesLiteral.push("Movie6");
moviesLiteral.push("Movie7");


for (var i in moviesLiteral) {
	window.console.log(moviesLiteral[i]);
}
var leastFavoriteMovies = ["leastFav1","leastFav2","leastFav3","leastFav4"];

window.console.log("Movies I like: \n\n" + moviesLiteral.join("\n") + " \n " + "\nMovies I regret watching: \n\n" + leastFavoriteMovies.join("\n"));

var reverseSort = moviesLiteral.concat(leastFavoriteMovies);
reverseSort = reverseSort.shift();
window.console.log(reverseSort);


//STEP 11

//STEP 12
var employee1 = [];
var employee2 = [];
var employees = [];
employee1["id"] = "DC981";
employee1["name"] = "John Flicker";
employee1["position"] = "Janitor";
employee1["department"] = "Custodial";
employee1["isEmployed"] = true;
employee2["id"] = "AB892";
employee2["name"] = "Ladaveon Johnson";
employee2["position"] = "Manager";
employee2["department"] = "Human Resources";
employee2["isEmployed"] = true;

employees.push(employee1);
employees.push(employee2);
window.console.log(employees[1]["id"]);

//STEP 13
var employee1 = [];
var employee2 = [];
var employees = [];
employee1["id"] = "DC981";
employee1["name"] = "John Flicker";
employee1["position"] = "Janitor";
employee1["department"] = "Custodial";
employee1["isEmployed"] = true;
employee2["id"] = "AB892";
employee2["name"] = "Ladaveon Johnson";
employee2["position"] = "Manager";
employee2["department"] = "Human Resources";
employee2["isEmployed"] = true;

employees.push(employee1);
employees.push(employee2);
window.console.log(employees[1]["id"]);

//STEP 14

var employee1 = [];
var employee2 = [];
var employees = [];
employee1["id"] = "DC981";
employee1["name"] = "John Flicker";
employee1["position"] = "Janitor";
employee1["department"] = "Custodial";
employee1["isEmployed"] = true;
employee2["id"] = "AB892";
employee2["name"] = "Ladaveon Johnson";
employee2["position"] = "Manager";
employee2["department"] = "Human Resources";
employee2["isEmployed"] = true;

employees.push(employee1);
employees.push(employee2);

var i;
for (i = 0; i < employees; i++) {
	if (employees[i]["names"] === true){
		 window.console.log(employees[i]["name"]);
	} 
	else{
}

//STEP 15
var employee1 = [];
var employee2 = [];
var employee3 = [];
var employees = [];
employee1["id"] = "DC981";
employee1["name"] = "John Flicker";
employee1["position"] = "Janitor";
employee1["department"] = "Custodial";
employee1["isEmployed"] = true;
employee2["id"] = "AB892";
employee2["name"] = "Ladaveon Johnson";
employee2["position"] = "Manager";
employee2["department"] = "Human Resources";
employee2["isEmployed"] = true;

employee3["id"] = "AB892";
employee3["name"] = "Ladaveon Johnson";
employee3["position"] = "Manager";
employee3["department"] = "Human Resources";
employee3["isEmployed"] = false;
employees.push(employee1);
employees.push(employee2);
employees.push(employee3);
window.console.log(employees);
var i;
for (i = 0; i < employees.length; i += 1) {
  if (employees[i]["currentEmployee"] === false) {
          window.console.log(employees[i]["name"] + " is not employeed")
} else {
        window.console.log(employees[i]["id"]);
          window.console.log(employees[i]["name"]);
          window.console.log(employees[i]["title"]);
          window.console.log(employees[i]["department"]);
           window.console.log(employees[i]["currentEmployee"]);  }
}
//STEP 16
var movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
var movieNameOnly = movies.filter(function (item) {
	"use strict"; 
	return typeof item === "string";
});
window.console.log(movieNameOnly);

//STEP 17
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

function showEmployee(employees) {
	"use strict";
	window.console.log("Employees:\n\n")
	var i;
	for (i = 0; i < employees.length; i += 1) {
		window.console.log(employees[i]);
	}
}

showEmployee(employees);

//STEP 18
var TestData = [58, '', 'abcd', true, null, false, 0];
 
function checkTestData(TestData) {
	"use strict";
	var i;
		
	for (i = 0; i < TestData.length; i += 1) {
		if ((TestData[i] === 58) || (TestData[i] === true) || (TestData[i] === "abcd")) {
			window.console.log(TestData[i]);
		} else {
			window.console.log(" ");
		}
	}
}
checkTestData(TestData);

//STEP 19
var NumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var random = Math.round(Math.random() * 10);
window.console.log(NumArray[random]);

//STEP 20
var arrayNum = [0, 1, 2, 3, 4, 56, 7, 4, 2];

function largestOfFour(arr) {
   "use strict";
	var largestNumber = [0,0,0,0];
   for(var i = 0; i < arrayNum.length; i++) {
    for(var ip2 = 0; ip2 < arrayNum[i].length; ip2++) {
       if(arrayNum[i][ip2] > largestNumber[i]) {         
          largestNumber[i] = arrayNum[i][i];
        }
    }
 }
 return largestNumber;
}
*/