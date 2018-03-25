/**
 * 背包问题
 * @param { Number } capacity 限制重量  
 * @param { Array } weights 物品重量    
 * @param { Array } values 物品价值
 * @param { Number } n 件数
 */
function knapSack(capacity, weights, values, n) {
    var i, w, a, b, Ks = []
    for (i = 0; i <= n; i++) {
        Ks[i] = []
    }
    for (i = 0; i <= n; i++) {
        for(w = 0; w <= capacity; w++){
            if(i === 0 || w === 0){
                Ks[i][w] = 0
            } else if(weights[i - 1] <= w) {
                a = values[i - 1] + Ks[i - 1][w - weights[i - 1]]
                b = Ks[i - 1][w]
                Ks[i][w] = a > b ? a : b
            } else {
                Ks[i][w] = Ks[i - 1][w]
            }
        }
    }
    findValue(n, capacity, Ks, weights, values)
    console.log(Ks)
    return Ks[n][capacity]
}

var max = knapSack(
    21,
    [1, 3, 4, 6, 7],
    [2, 4, 5, 9, 13],
    5
)
console.log(max);

function findValue(n, capacity, Ks, weights ,values){
    var i = n, j = capacity
    while(i > 0 && j > 0){
        if(Ks[i][j] !== Ks[i - 1][j]){
            console.log(`物品${i} 重量${weights[i - 1]} 价值${values[i - 1]}`)
            i--
            j = j - weights[i]
        } else {
            i--
        }
    }
}