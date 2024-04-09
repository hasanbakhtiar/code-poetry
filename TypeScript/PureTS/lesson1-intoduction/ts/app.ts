var info:boolean = true;
console.log(info);

// var numbArr:Array<number> = [1,2,3,4,5,6,7];
var numbArr:any[] = [1,2,3,"4",5,"6",7];


type objType={
    id:number,
    title:string,
    newDevice:boolean,
    a:any[]
}

var phoneObj:objType={
        id:1,
        title:"Xiaomi",
        newDevice:true,
        a:[1,2,3,"4",5,"6",7]
}
