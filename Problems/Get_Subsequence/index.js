// Using Recursion
//Time complexity :- O(2^n)

function getSubsequence(str){
    if(str.length === 0)
    {
        const array = [''];
        return array;
    }

    const ch = str.charAt(0);
    const ros = str.substring(1);

    const mres = [];
    const rres = getSubsequence(ros);
    for(let i=0; i<rres.length; i++)
    {
        mres.push("-" + rres[i]);
        mres.push(ch + rres[i]);
    }
    return mres;
}

const res = getSubsequence('abcde');
console.log(res);