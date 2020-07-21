// contoh 1
function print(name){
    console.log(name)
}

function sayHello(firstName, callback){
    const data = `hello ${firstName}`
    callback(data)
}

sayHello('risano',print);


// contoh 2
const printRP=(data)=>{
  console.log(`RP. ${data}`)
}
const calculator = (num1,num2, callback)=>{
    const result = num1 + num2
    callback(result)
}

let hasil = calculator(10000, 20000, printRP)

console.log(hasil)

// parameternya langsung di buat fungsi
// calculator(10000, 20000, function(data){
//     console.log(`RP. ${data}`)
// })
