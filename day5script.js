console.log("day 5")

function emp(name,position,year){
    return{
        name,
        position,
        year,
        details: function(){
            console.log(`employee name is ${name} who is working as ${position} from the year ${year}.`);
                           
            }
    };
}

const Ramya=emp("Ramya","Business data analyst","2021");
console.log(Ramya);
Ramya.details();

const Ramapriya=emp("Ramapriya","Business analyst","2020");
Ramapriya.details();

//this
//"this" holds the data of immidieate parent object
const student={
    name:"Ramya",
    course:"Full stack developer",
    batch1:"weekend batch",
    getdetails:function(){
        console.log(this);
    }
};

student.getdetails();
console.log(this);

//if we use "this" key word in arrow function if will only target global variable 
//whereas when it is used in normal function the data of immidieate parent object is targeted


//constructur function



//prototypes


//class

class sample{
    constructor(name,position,year){
        this.name=name
        this.position=position
        this.year=year
    }
    detailsnew(){
        console.log(`employee name is ${this.name}`);
   }
};

const newemp = new sample("Revathi","Senior analyst","2000")
console.log(newemp)
newemp.detailsnew()