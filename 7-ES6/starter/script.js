// const person  = {
//     name: 'josh',
//     age: 28,
//     test() {
//         console.log(`my name is${this.name}`);
//     }
// }
// person.test();

// let arr = [1 , 5, 4 ,8 ,2 ,9];
// let newArry = [arr.sort().reverse()];
// console.log(newArry);

// let arr = [1 , 5, 4 ,8 ,2 ,9];
// let newArry = [arr.sort((a,b)=>{
//     return b - a
// })];
// console.log(`just sorting ${newArry}`);
// let w = 'hello';

// console.log(w.split('').reverse().toString());
class Town{
    constructor(name,buildYear,trees){
        this.name = name;
        this.buildYear = buildYear;
        this.trees = trees; 
    }
}
class Park extends Town{
    constructor(name,buildYear,trees){
        super(name,buildYear,trees);       
    }
    testing(){
        console.log(this.trees);
    }
}

class Street extends Town{
    constructor(name,buildYear,length, size = 'normal'){
        super(name,buildYear);
        this.length = length;
        this.size = size
    }
    testing(){
        console.log(this.size);
    }
}



const allData = {
    parks: [
    park1 = new Park ('mlk park', 1990, 500),
    park1 = new Park ('nyc park', 1879, 2000),
    park1 = new Park ('holiday park', 1699, 950)

    ],
    streets:[
    street1 = new Street ('mt morris street', 1415, 540),
    street1 = new Street ('wadsworth street', 1560, 2300),
    street1 = new Street ('king street', 2019, 500)
    ]
};

allData.parks[0].testing();
allData.streets[0].testing();
