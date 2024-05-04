
//Task 1

let arr = [2,5,3,6,4,3];
let sqrArr = arr.map(item =>item*item);
console.log(sqrArr)

//Task2
let Grade =(num)=>{
  if(num>=75){
    console.log("A")
    return "A"
  }
  else if(num>=60 && num<=74){
    console.log("B")
    return "B"
  }
  else if(num>=50 && num <=59){
    console.log("C")
    return "C"
  }
  else if(num >=33 && num <=49){
    console.log("D")
    return "D"
  }
  else{
    console.log("F")
    return "F"
  }

}
Grade(50)

//Task 3
let carObject ={
    CompanyName :'Suzuki',
    Model : "Shift",
    Year : "2015"
}
let yearChange =(year)=>{
     carObject.Year = year
}
let printModelCAr =({Model,Year})=>{
    console.log(`model ${Model} Year ${Year}`)
}

printModelCAr(carObject)
//After changing year
yearChange(2022)
printModelCAr(carObject)



// task4
let  arr4 = [2,8,6,9,3,8,1,5];
const myPrimeArray = arr4.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  });
  console.log(myPrimeArray);


   //task5
   //Map function
   let abc = [2,8,6,9,3,8,1,5];
   const sqrt = abc.map(item =>item*item)
   console.log(sqrt)

   //filter functions
   let xyz = [2,8,6,9,3,8,1,5];
   let filterxyz = xyz.filter(num=>num%2 ==0);
   console.log(filterxyz)

   //Reduce function for sum 
   let arrq = [2,8,6,9,3,8,1,5];
   let reducearr = arrq.reduce((acc,curr)=>acc+curr,0)
   console.log(reducearr)


   //task6
   let apiCall =async()=>{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log(data)
   }
   apiCall()


   //task 7
   let person = {
    name: 'Deepak Yadav',
    address: {
        city: 'Jabpalpur',
        district : 'Jabalpur',
        pincode : '482003'
    }
   }
let phoneNumber = person.contact?.phoneNumber;
console.log("Phone no. ", phoneNumber)


