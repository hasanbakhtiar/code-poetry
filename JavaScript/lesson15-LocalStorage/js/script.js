

// localStorage.setItem('text',"Hewllo")
// localStorage.setItem('textOne',"Hewllo one")
// localStorage.removeItem('text')
// localStorage.clear()
// document.querySelector('h1').innerHTML=localStorage.getItem('textOne');

// console.log(localStorage);



const langBtn = document.querySelector("#lang-btn");
const navLink = document.querySelectorAll('.nav-link');

const langData = {
    az: ["Ana Sehife", "Haqqimizda", "Xidmetlarimiz", "Meqale", "Elaqe"],
    en: ["Home", "About", "Service", "Blog", "Contact"]
}





if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en');
} else {

    langBtn.onclick = () => {
        if (langBtn.innerHTML === "AZ") {
            for (let i in langData.az) {
                navLink[i].innerHTML = langData.az[i];
            }
            localStorage.setItem("lang","az")

            langBtn.innerHTML ="EN"
        }else{
            for (let i in langData.en) {
                navLink[i].innerHTML = langData.en[i];
            }
            localStorage.setItem("lang","en")
            langBtn.innerHTML ="AZ"
        }
    }
}



// normal stiation
if (localStorage.getItem('lang') === "en") {
    for (let i in langData.en) {
        navLink[i].innerHTML = langData.en[i];
    }
    langBtn.innerHTML ="AZ"
} else {
    for (let i in langData.az) {
        navLink[i].innerHTML = langData.az[i];
    }
    langBtn.innerHTML ="EN"

}







