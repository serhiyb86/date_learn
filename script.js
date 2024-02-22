let currentDate = new Date();
console.log(currentDate)

//from 
let fromMiliseconds = new Date(98874562542);
console.log(fromMiliseconds)

let componentDate = new Date(1999, 11, 25, 00, 05, 03);
console.log(componentDate)

let parsedDate = new Date("Feb 18 1973 12:09:22");
console.log(parsedDate)

console.log(componentDate.getFullYear())
console.log(componentDate.getMonth())
console.log(componentDate.getHours)
console.log(componentDate.getMilliseconds)
componentDate.setFullYear(2002)
componentDate.setMinutes(0)
componentDate.setSeconds(0)
console.log(componentDate)


console.log()
console.log()
console.log()

const date = new Date("2020-05-12T23:50:21.817Z");
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
date[Symbol.toPrimitive]("string"); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toJSON(); // 2020-05-12T23:50:21.817Z

date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT

date.toLocaleString(); // 5/12/2020, 6:50:21 PM
date.toLocaleDateString(); // 5/12/2020
date.toLocaleTimeString(); // 6:50:21 PM


// To test a function and get back its return
function printElapsedTime(testFn) {
    const startTime = Date.now();
    const result = testFn();
    const endTime = Date.now();
  
    console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
    return result;
  }

  printElapsedTime(()=>console.log)