// searchName(“an”, 3, function(..){..})

const searchName = (kata, limit, callback) =>{
    const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope']
    let search = name.filter((item)=>{
        return item.length <= 5
    })
    callback(search, limit)
    // console.log(search)
}

const limitName = (data, limit) =>{
    let result = data.slice(0,limit)
    console.log(result)
}

searchName('contoh', 3, limitName);