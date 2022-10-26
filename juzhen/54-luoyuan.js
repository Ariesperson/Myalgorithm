// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    //处理空矩阵
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    //定义初始位置
    const rows = matrix.length, columns = matrix[0].length;
    const order = [];
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
    while(left<=right&&top<=bottom){
        // 向右遍历
        for (let column = left; column <=right; column++) {
            console.log(matrix[top][column])
            order.push(matrix[top][column])            
        }
        // 向下遍历
        for (let row = top + 1; row <= bottom; row++) {
            console.log(matrix[row][right])
            order.push(matrix[row][right]);
        }
        // 
        if (left < right && top < bottom) {
            // 向左遍历
            for (let column = right - 1; column > left; column--) {
                console.log(matrix[bottom][column])
                order.push(matrix[bottom][column]);
            }
            // 向上遍历
            for (let row = bottom; row > top; row--) {
                console.log(matrix[row][left])
                order.push(matrix[row][left]); 
            }
        }
        // 
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return order;
};