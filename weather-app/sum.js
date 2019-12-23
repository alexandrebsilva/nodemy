const add = (num1, num2, callback) => {
    let result = 0;
    setTimeout(() => {

        resultado = num1 + num2;

        callback(resultado)
    }, 2000);
}

add(1, 2, (result) => {

    console.log(result)
})
console.log(encodeURIComponent('São Paulo'))