'use strict';

let money, time;

money=+prompt("Your monthly budget?");
time=prompt("Please enter date in YYYY-MM-DD format");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpences: '',
    income: '',
    savings: false
};

for (let i=0;i < 2; i++) {
    let a = prompt("Enter necessary type of expences in this month"),
        b = prompt("How much will it cost?");
    
    if(typeof(a)==='string' && typeof(a)!=null && typeof(b)==='string' && typeof(b)!=null 
        && a!='' && b!=='' && a.length<50 ) {
        console.log(a+':'+b);
        appData.expenses[a]=b;
    } else {
        i--;
    }


}

appData.moneyPerDay = appData.budget / 30;
// console.log(appData);
alert("Daily budget is: "+appData.moneyPerDay);

if(appData.moneyPerDay<100) {
    console.log("Minimal welth level");
} else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000) {
    console.log("Middle class income level");   
} else if (appData.moneyPerDay>2000) {
    console.log("Ritch b..ch");
} else {
    console.log("Something went wrong.");
}