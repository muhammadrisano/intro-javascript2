// const data1 = printData;

const printData = (item) =>{
    console.log(`saya lagi print ${item}`);
}
let coba = printData
coba()
// data1('muhammad risano');
// console.log(data1)

// ** fungsi memanggil fungsi dari luar 
// const setFullname = (fistName, lastName) =>{
//     const fullname = fistName + " " + lastName
//     printData(fullname)
// }
// setFullname('muhammad', 'risano')

// ** menggunakan callback
const setFullname = (fistName, lastName, printData) =>{
    const fullname = fistName + " " + lastName;
    // let sortData= useCallback(fullname)
    // let datalimit= limit(sortData)
    printData(fullname)
}
setFullname('muhammad', 'risano', printData)
// console.log(fullname)

