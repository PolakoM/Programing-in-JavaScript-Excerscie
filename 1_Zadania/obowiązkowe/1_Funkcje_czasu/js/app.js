function countHello(number) {
    var counter = 1;
    var interval = setInterval(()=>{
        if (counter == number){
            clearInterval(interval);
        }
        console.log(`Hello`);
        counter++;
    }, 500)
}

countHello(10);