function remove_Duplicate_Using_HashTable(str){
    let result = '';
    const charHash = {};

    for(const char of str){
        if(!charHash[char])
        {
            charHash[char] = char;
        }
    }

    Object.keys(charHash).map((char) => {
        result += char;
    });

    return result;
}

function remove_Duplicate_Using_Set(str)
{
    return [...new Set(str)].join('');
}



var res = remove_Duplicate_Using_HashTable('apple');
console.log(res);
var res = remove_Duplicate_Using_HashTable('bye');
console.log(res);
var res = remove_Duplicate_Using_HashTable('alphabet');
console.log(res);


var res = remove_Duplicate_Using_Set('apple');
console.log(res);
var res = remove_Duplicate_Using_Set('bye');
console.log(res);