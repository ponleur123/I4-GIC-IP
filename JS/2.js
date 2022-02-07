const p1 = new Promise(function(resolve, reject){
    resolve("Job one is done!")
})
const p2 = new Promise(function(resolve, reject){
    resolve("Job two is done!")
})
const p3 = new Promise(function(resolve, reject){
    resolve("Job three is done!")
})
const p4 = new Promise(function(resolve, reject){
    resolve("Job four is done!")
})
const p5 = new Promise(function(resolve, reject){
    resolve("Job five is done!")
})

Promise.all([p1,p2,p3,p4,p5]).then(values=>{
    console.log(values)
    console.log("All job are done!!");
})