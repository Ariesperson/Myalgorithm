/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//  var findNumberIn2DArray = function(matrix, target) {
//     let newArr = []
//     for (let index = 0; index < matrix.length; index++) {
//         newArr = [...newArr.concat(matrix[index])]
//     }
//     newArr.sort()
//     if(newArr.includes(target)) return true
//     else return false;
// };
var findNumberIn2DArray = function(nums, target) {
    if(!matrix.length) return false;
    let x = matrix.length - 1, y = 0;
    while(x >= 0 && y < matrix[0].length){
        if(matrix[x][y] === target){
            return true;
        }else if(matrix[x][y] > target){
            x--;
        }else{
            y++;
        }
    }
    return false;
};

findNumberIn2DArray(
    [
        [1,   4,  7, 11, 15],
        [2,   5,  8, 12, 19],
        [3,   6,  9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ],20
)