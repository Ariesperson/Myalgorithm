//买卖股票的最佳时机
//贪心算法
// 时间复杂度N  空间复杂度1
var maxProfit1 = function(prices) {
    if(prices.length==0) return 0
    let min = prices[0] //初始化最小值
    let max = 0 //初始化最大收入
    // 买股票问题其实就是需要最低点买入  最高点卖出。
    // 每一天的操作及是比较买入价格是否是比昨日小，今日如果卖出收入是否比昨天高
    for (let price of prices) {
        min = Math.min(min,price)
        max = Math.max(max,price-min)
    }
    return max
};

//动态规划
// 今天没有持有股票 dp[i][0] = max
var maxProfit2 = function(prices) {
    let n = prices.length
    //定义二位数组把所有可能穷举即是动态规划图解，现在需要找到最佳路线
    let dp = Array.from(new Array(n),()=>new Array(2))
     
    //状态未压缩
    // dp[0][0] = 0 //第1天不持有
    // dp[0][1] = -prices[0] //第1天持有
    // for (let index = 0; index < n; index++) { 
    //     dp[index][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]) //第1天不持有，第i天卖出
    //     dp[index][1] = Math.max(dp[i-1][1], -prices[i]) //第1天不持有，第i天卖出
    // }
    // return dp[n-1][0]

    //状态压缩
    dp[0] = 0 //第0天不持有
    dp[1] = -prices[0] //第0天持有
    //买入的话即总收益减去当天股票价格，卖出的话即总收益加上当天卖出价格，
    for (let index = 0; index < n; index++) {
        dp[0] = Math.max(dp[0],dp[1]+prices[index]) //第1天不持有，第i天卖出
        dp[1] = Math.max(dp[1],-prices[index]) //第1天持有，第i天卖出
    }
    return dp[0]
};