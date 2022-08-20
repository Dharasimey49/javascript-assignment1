let dataDumebi = 96 + 108 + 89;
let averagedataDumebi = dataDumebi / 3;
console.log(averagedataDumebi);

let dataCiroma = 88 + 91 + 210;
let averagedataCiroma = dataCiroma / 3;
console.log(averagedataCiroma);

if (averagedataDumebi >= averagedataCiroma) {
  console.log("Yay!! you have won a trophy team Dumebi");
} else {
  console.log("Yay!! you have won a trophy team Ciroma");
}

let b1Dumebi = 97 + 112 + 101;
let averageb1Dumebi = b1Dumebi / 3;
console.log(averageb1Dumebi);

let b1Ciroma = 109 + 95 + 123;
let averageb1Ciroma = b1Ciroma / 3;
console.log(averageb1Ciroma);

if (averageb1Dumebi > averageb1Ciroma && averageb1Dumebi >= 100) {
  console.log("you have won a trophy Dumebi");
} else if (averageb1Ciroma > averageb1Dumebi && averageb1Ciroma >= 100) {
  console.log("you have won a trophy Ciroma");
}

let b2Dumebi = 97 + 112 + 101;
let averageb2Dumebi = b2Dumebi / 3;
console.log(averageb2Dumebi);

let b2Ciroma = 109 + 95 + 106;
let averageb2Ciroma = b2Ciroma / 3;
console.log(averageb2Ciroma);

if (
  averageb2Dumebi === averageb2Ciroma &&
  averageb2Dumebi >= 100 &&
  averageb2Ciroma >= 100
) {
  console.log("There is a draw");
} else {
  console.log("No team wins the trophy");
}

let mark = prompt("Enter any mark");
if(mark < 25){
    console.log("F");
}else if(mark >=  26 && mark <= 45){
console.log("E");
}else if(mark >=  46 && mark <= 50){
console.log("D");
}else if(mark >=  51 && mark <= 60){
console.log("C");
}else if(mark >=  61 && mark <= 80){
console.log("B");
}else if(mark >= 81){
console.log("A");
}
