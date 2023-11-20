const arrayNumber = [6, 9, 14, 75, 6, 5]
const arrayNumber2 = [8, 95, 72, 1, 532, 7]


function multiplayArray(arr) {
    const nechetnoe = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0)
            nechetnoe.push(arr[i])
    }
    const chetnoe = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            chetnoe.push(arr[i])
    }
    const result = []

    for(i=0; i<chetnoe.length; i++){
        
        result.push(chetnoe[i]*nechetnoe[i])
    }

    return result
}

console.table(multiplayArray(arrayNumber2))