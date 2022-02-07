async function myFunction(){
    const promise =  new Promise(function (resolve, reject){
        setTimeout(()=>{
            resolve("Hell World!!")
        },5000 )
    })
    // document.getElementById("ex4_message").style.display="inline"
    console.log(await promise)
}
myFunction();