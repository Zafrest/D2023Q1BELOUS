add = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = []
for (item = 1; item < 10; item++){
    for(item2 = 1; item2 < 10; item2++){
        console.table(item * item2)
    }
}
console.table(result)