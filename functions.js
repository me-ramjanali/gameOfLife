
let counter = 0
module.exports = function(x, y, data) {
    for(let a = 0; a < y; a++){
        for(let b = 0; b < x; b++){
            resetCounter()
            let dOa = calculate(data[a][b], x, y, data, a, b)
            if(data[a][b] === 1 && dOa < 2){
                data[a][b] = 0;
            }

            if(data[a][b] === 1 && dOa >= 2 && dOa <= 3){
                data[a][b] = 1;
            }

            if(data[a][b] === 1 && dOa > 3){
                data[a][b] = 0;
            }

            if(data[a][b] === 0 && dOa === 3){
                data[a][b] = 1;
            }
        }
    }

    return data;
}

calculate = (point, x, y, data, indexA, indexB) => {
    for(let a = 0; a < y; a++){
        for(let b = 0; b < x; b++){
            if(a !== indexA && b !== indexB && data[a][b] > 0){
                increaseCounter()
                console.log(counter)
            }else{
                dicreaseCounter()
            }
        }
    }
    
    return counter;
}

increaseCounter = () => {
    counter++
}
dicreaseCounter = () => {
    if(counter !== 0)
        counter--
}
resetCounter = () => {
    counter = 0
}