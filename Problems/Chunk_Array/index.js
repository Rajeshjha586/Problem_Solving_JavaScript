const errfirstArgument = 'Invalid Argument: Expected an array as first argument';
const errSecondArguemnt = 'Invalid Argument: Expected a positive number as second argument';


function isValidArgument(array, size)
{
    if(!Array.isArray(array))
    {
        throw new Error(errfirstArgument);
    }

    if(typeof size !== 'number' || size<0)
    {
        throw new Error(errSecondArguemnt);
    }

    if(size > array.length)
    {
        return[array];
    }
    return 0;
}

//parameter as object
function arrayChunk({array, size})
{
    isValidArgument(array, size);

    const result = [];

    for(let i=0; i<array.length; i+=1)
    {
        //console.log(result[result.length-1])

        const lastchunk = result[result.length-1];
        //console.log(lastchunk)

        if(!lastchunk || lastchunk.length === size)
        {
            //console.log([array[i]]);
            result.push([array[i]]);
        }
        else
        {
            //console.log([array[i]]);
            lastchunk.push(array[i]);
        }
    }

    return result;
}


function chunkUsingSlice({array, size})
{
    isValidArgument(array, size);

    let index = 0;
    const result = [];

    while(index < array.length)
    {
        result.push(array.slice(index, index+size));
        index+=size;
    }

    return result;
}


function chunkUsingSplice({array1, size})
{
    isValidArgument(array1, size);
    const result = [];
    let copied = [...array1] //ES6 destructuring

    let numOfChild = Math.ceil(copied.length / size);

    for(let i=0; i<numOfChild; i++)
    {
        result.push(copied.splice(0, size));
    }

    return result;
}

function recursiveChunk(array, size)
{
    isValidArgument(array, size);

    let firstChunk = array.slice(0, size);

    if(!firstChunk.length)
    {
        //base case
        return array;
    }

    return [firstChunk].concat(recursiveChunk(array.slice(size, array.length), size));
}

let array = [2, 3, 5, 6, 8, 9];
let size = 2;

let res = arrayChunk({array, size});
console.log(res);

let ans = chunkUsingSlice({array, size});
console.log(ans);

let array1 = [2, 3, 5, 6, 8, 9, 11];
let ans1 = chunkUsingSplice({array1, size});
console.log(ans1);


let ans2 = recursiveChunk(array, size);
console.log(ans2)