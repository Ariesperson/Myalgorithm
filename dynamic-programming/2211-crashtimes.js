/**
 * @param {string} directions
 * @return {number}
 */

//  解题思路
//  用栈模拟，从左至右遍历，directions
 
//  遇到 L，判断栈顶是否为 R 两份 或者 S 一份，如果是，分别积分，然后将栈顶置为 S。
//  如果遇到 R，如果栈顶不是 R 需要清栈，再 push R。
//  遇到 S，需要把栈中的 R 全部取出来计分。
//  在这个栈中 R 和 S 不能同时存在。
 
var countCollisions = function(directions) {
    const stack = []
    let ans = 0
    for (let i = 0; i < directions.length; i ++) {
        const dir = directions[i] //当前第i量车
        if (dir === 'L') { //当前车辆向左
            if (stack.length && stack[stack.length - 1] === 'R') { //如果栈里有车辆切当前车辆为向右的方向
                ans += 2//碰撞次数加2
                stack.pop() //碰撞后需要出栈
                for (let j = 0; j < stack.length; j ++) {//遍历当前栈
                    if (stack[j] === 'R') { //如果栈里有往右的车
                        ans ++ //碰撞次数加1
                    }
                }
                stack.length = 0 //栈清空
                stack.push('S') //把当前车辆放进栈里
            } else if (stack.length && stack[stack.length - 1] === 'S') {//如果栈里有车辆切当前车辆为停止状态的方向
                ans += 1 //碰撞次数加1
            }
        } else if (dir === 'R') {//当前车辆向右
            if (stack.length && stack[stack.length - 1] === 'S') { //如果栈里有车辆切当前车辆为停止状态的方向
                stack.pop()
            }
            stack.push('R')//把当前车辆放进栈里
        } else {//当前车辆停止状态
            for (let j = 0; j < stack.length; j ++) {
                if (stack[j] === 'R') {//如果栈里有车辆切当前车辆为向右的方向
                    ans ++ //碰撞次数+1
                }
            }
            stack.length = 0
            stack.push('S')
        }
    }
    return ans
};
countCollisions('RLRSLL')



// Q2 1581
// 栈模拟
function countCollisions2(directions) {
    const length = directions.length
    let stack = [directions[0]]
    let result = 0

    for (let i = 1; i < length; i++) {
        let cur = directions[i]
        let last = stack[stack.length - 1]

        if (last === cur) {
            if (cur !== 'S') {
                stack.push(cur)
            }
            continue
        }
        if (last === 'R') {
            // RRRL -> RRRS
            if (cur === 'L') {
                result += 1
                cur = 'S'
            }
            // RRRS -> S
            while (last === 'R') {
                result += 1
                stack.pop()
                last = stack[stack.length - 1]
            }
            stack = ['S']
        } else if (last === 'S' && cur === 'L') {
            result += 1
            stack = ['S']
        } else {
            stack = [cur]
        }
    }

    return result
}

