function farm(day){
    var cows = 1;
    var totalmilk = 0;
    var totalmoney = 0;
    for (let i = 0; i < day; i++) {
        const dailymilk=cows*3;
        totalmilk+=dailymilk;
        const dailymoney=dailymilk*3;
        totalmoney+=dailymoney;
        if(totalmoney>=300 ){
            cows+=Math.floor(totalmoney/300);
            totalmoney%=300;
        }
    }
    var money=totalmoney+300*cows;
    if (money>15000) {
        console.log("siz toyuq fermasini aldiniz")
    }
return `${day} gun erzinde    toplam satilmish sud ${totalmilk} lt       pul ${totalmoney} $          ineklerin sayi ${cows}           toplam gelir ${money - 300 }`;
}
console.log(farm(34));

// =================================================================================================

    // creating a function
    const farmersIncome = (daysPassed) => {
        // declaring constant variables
        const cowPrice = 300;
        const milkPrice = 3;
        const milkLitersPerDay = 3;
        // declaring changing variables
        let cowsNumber = 1;
        let income = 0;

        // creating a loop for income update each day
        for (let i = 1; i <= daysPassed; i++) {
            // each day income adds on
            income += milkLitersPerDay * cowsNumber * milkPrice;
            // creating a loop to update the income after buying cows. If no cows are bought, the income updates without substracting the cow price
            for (let k = 1; k < daysPassed; k++) {
                if (income >= 300 * k && income < 300 * (k + 1)) {
                    // amount of money spent to new cows
                    income -= 300 * k;
                    // number of cows which are bought
                    cowsNumber += 1 * k;
                }
            }
        }
        console.log("After", daysPassed, "days");
        console.log("the farmer owns", cowsNumber, "cows");
        console.log("and his remaining income after buying the cows (if any) is $", income + ".");
        console.log("At that moment he gets", milkLitersPerDay * cowsNumber, "liters of milk per day");
        console.log("and earns $", milkLitersPerDay * cowsNumber * milkPrice, "per day.");
        console.log("His total revenue is $", cowPrice * cowsNumber + (income-300));

        if (cowPrice * cowsNumber + income > 15000) {
            return true;
        } else {
            return false;
        }
    };

    console.log("Can the farmer afford a new farm for $ 15 000 yet?", farmersIncome(34));