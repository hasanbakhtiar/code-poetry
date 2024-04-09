class Car{

    protected ibrand:string;
    public iyear:number;
    public icolor:string;
    
    constructor(brand:string,year:number,color:string){
        this.ibrand = brand;    
        this.iyear = year;    
        this.icolor = color;    
    }

    public a(){

    }
}

const myCar = new Car("Mercedes 190E",1990,"white");
console.log(myCar.ibrand);


class Moto extends Car{
    constructor(brand:string,year:number,color:string){
        super(brand,year,color);
    }
    showData(){
        return this.ibrand;
    }
}
const myMoto = new Car("Ducatti ",1960,"dark");



