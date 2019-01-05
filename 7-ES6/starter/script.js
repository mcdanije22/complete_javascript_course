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


// class set ups/data

class Town{
    constructor(name,buildYear,trees){
        this.name = name;
        this.buildYear = buildYear;
        this.trees = trees; 
    }
}
class Park extends Town{
    constructor(name,buildYear,trees, parkArea){
        super(name,buildYear,trees); 
        this.parkArea = parkArea;      
    }
    treeDensity(){
        console.log( `${this.name} has an average tree density of ${this.trees / this.parkArea} trees per square km`);
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
    park1 = new Park ('mlk park', 1990, 500, 1000),
    park2 = new Park ('nyc park', 1879, 2000, 3000),
    park3 = new Park ('holiday park', 1699, 950, 5000)

    ],
    streets:[
    street1 = new Street ('mt morris street', 1415, 540,'small'),
    street2 = new Street ('wadsworth street', 1560, 2300, 'huge'),
    street3 = new Street ('king street', 2019, 500, 'tiny'),
    street4 = new Street ('josh street', 1990, 1000)

    ]
};



// allData.streets[0].testing();

// const avgTownAge = allData.parks.map((cur, i)=>{
    
//    onsole.log(cur.name);
// });


// park functions
console.log('-----PARKS REPORT-----')
const avgTownAge = function(){
    let totals = [];
    const map = allData.parks.map((cur)=>{
        totals.push(cur.buildYear);
    })
    const reducer = totals.reduce((total,num)=>{
        return total + num
    })
    console.log(`Our ${allData.parks.length} parks have an average age of ${Math.round(reducer / allData.parks.length)}`);   
}
avgTownAge();

const displayTreeDensity = allData.parks.forEach(cur => cur.treeDensity());

const treeGreaterThan =  allData.parks.forEach(cur =>{
   // console.log(cur.trees);
    if(cur.trees > 1000){
        console.log(`${cur.name} has more than 1000 trees`)
    } 
});
console.log('-----STREETS REPORT-----')
// street functions 
const avgStreet = function(){
    let totals = [];
    const map = allData.streets.map(cur =>{
        totals.push(cur.length);
    }) 
    const reducer = totals.reduce((total,num)=>{
        return total + num
    })
    console.log(`our ${allData.streets.length} have a total length of ${reducer} km, with an average of ${reducer / allData.streets.length} km`);
}
avgStreet();

const streetDisplay = allData.streets.forEach(cur =>{
    console.log(`${cur.name}, built in ${cur.buildYear}, is a ${cur.parkArea} street.`);
});
