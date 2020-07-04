function countHello(number){
    let count = 1;
    const x = setInterval(() => {
    count++;
    console.log("Hello",count);
    if(number<count){
        clearInterval(x);
    }
},500);


}countHello(5);

//Test