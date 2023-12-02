// if - eger
// else - deyilse
// else if - deyilse eger


// const a = 5>1;

// const b = 40=="40"
// console.log(a);
// if (a) {
//     console.log('bu ifade duzdur');
// }else if(b){
//         console.log('bu 40dir');
// }else{
//     console.log('bu ifade duz deyil');
// }




// const time = 9;

// if (time > 5 && time < 13) {
//     console.log('good morning');
//     if (time === 7) {
//             console.log('get up');
//     }else if(time === 9){
//         console.log('yemeyini ye');
//     }
// } else if (time >= 13 && time <= 18) {
//     console.log('good afternoon');
// } else if (time > 19 && time <= 21) {
//     console.log('good evening');
// }else if( time > 22 && time <=23){
//     console.log('good night');
// }else{
//     console.log('wrong time');
// }

// 0-13 - usaq 
// 14-18 - yeniyetme 
// 18-35 - genc 
// 35-50 - orta   
// 50+ -yasli   
// 70+ - R.I.P

let info = 5;


switch (info) {


    case 5:
        info = 100
        console.log("this is 5");
        if (info >= 20) {
            console.log("this is evrika");
        }
        break;


    case 10:
        console.log("this is 10");
        break;
    default:
        console.log("this is default");
        break;
}

