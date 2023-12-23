console.log('day 3');
//xml http request
let abc= new XMLHttpRequest();
console.log(abc);
abc.open("get","https://restcountries.com/v3.1/all");
abc.send();
abc.onload=function(){
    const data= JSON.parse(abc.response);
    console.log(data);
};

//functions
//function declaration
function myself(){
    console.log("My name is Ramya");
    console.log("My am working in MSC");
}

myself();