// Powers of Two algorithm 
/*
0^2 = 0 
1^2 = 1
2^2 = 4 
3^2 = 9 and so on 
*/

const number = (input) => {
    for(let i = 0; i <= input; i++){
        console.log(i*i);
    }
}

number(6);