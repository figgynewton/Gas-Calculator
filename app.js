const calculations = (mpg, miles, cost)=> {
    let ele = document.createElement("div");
    let answer = (miles / mpg) * cost
    ele.innerHTML =
        " To drive a car with an MPG rating of " +
        mpg +
        " for " +
        miles +
        " miles at $" +
        cost +
        " per gallon would cost $" +
        answer +
        ".";
    document.body.querySelector(".box").appendChild(ele);
}

let buttonEle = document.body.querySelector(".button");

let miles = Number(prompt("Enter miles per year driven"))
let cost = Number(prompt("Enter current cost of a gallon of gasoline"))

let mpg1 = 12;
let mpg2 = 17;
let mpg3 = 26;
let mpg4 = 29;

calculations(mpg1, miles, cost);
calculations(mpg2, miles, cost);
calculations(mpg3, miles, cost);
calculations(mpg4, miles, cost);

buttonEle.addEventListener("click", function () {
    location.reload();
});