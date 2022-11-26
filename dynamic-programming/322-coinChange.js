// 方法1.动态规划

// 思路：dp[i]表示兑换面额i所需要的最少硬币，因为硬币无限，所以可以自底向上计算dp[i]，
// 对于dp[0~i]的每个状态，循环coins数组，寻找可以兑换的组合，用i面额减去当前硬币价值，
// dp[i-coin]在加上一个硬币数就是dp[i],最后取最小值就是答案，状态转移方程就是dp[i] = Math.min(dp[i], dp[i - coin] + 1);
// 复杂度分析：时间复杂度是O(sn)，s是兑换金额，n是硬币数组长度，一共需要计算s个状态，每个状态需要遍历n个面额来转移状态。空间复杂度是O(s)，也就是dp数组的长度

var coinChange = function(coins, amount) {
    var dp = new Array(amount + 1).fill( Infinity );//初始化dp数组
    dp[0] = 0 //面额0只需要0个硬币兑换
    for(let i = 1;i<=amount;i++){//循环面额
        for(let coin of coins){//当面额大于硬币价值时
            if(i-coin>=0) 
            //dp[i - coin]： 当前面额i减当前硬币价值所需要的最少硬币
            //dp[i] 可由 dp[i - coin] + 1 转换而来
            {dp[i] = Math.min(dp[i],dp[i-coin]+1);
            console.log(`需要兑换的面额是${i},coin是${coin}`,dp[i])}
        }   
    }
    return dp[amount] === Infinity ? -1 : dp[amount]//如果dp[amount] === Infinity，则无法兑换
};
coinChange([1,2,5],11)