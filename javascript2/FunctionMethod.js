// decralation
function add1(num1, num2){
    const total = num1 + num2;
    return total;
}

// expresion
const add2 = function(num1, num2){
    const total = num1 + num2;
    return total;
}

// fungsi

// const nilai1 = 100;
// const nilai2 = 90; 
// arrow
const add3 = (num1, num2) => {
    if(num1 != '' && num2 !=''){
        return "nilai salah"
    }
    num1 + num2
};

let nilaiBudi = add(90, 20)
let nilaiBedi = add(70, 90)
// console.log(add(nilai1, nilai2))

// method 

let object = {
    // firsName: "risano",
    // lastName: 'akbar',
    perkalian: function(num1, num2){
        return num1 * num2
    },
    pembagian: function(num1, num2){
        return num1/num2
    },
    printData: function(){
        // console.log(this.perkalian(10,20))
        console.log(this.pembagian(10,29))
    }
}

object.printData()

// method menggunakan class

// class getData {
//     pembagian(){
//         console.log('ini method pembagian')
//     }
//     perkalian(){
//         console.log('ini mehod perkalian')
//     }
// }
// let data = new getData()
// console.log(data.pembagian())

// console.log(object.perkalian(10, 20))