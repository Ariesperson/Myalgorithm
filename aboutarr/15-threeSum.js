var threeSum = (nums)=>{
    let res = []
    let len = nums.length
    //先按照从小到大排序
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < len; i++) {

        if(nums[i]>0) break // 如果当前数字大于0，则三数之和一定大于0，所以结束循环

        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重

        let L = i+1
        let R = len-1

        while(L < R){  //循环的条件在于左侧下标一定小于右侧下标

            const sum = nums[i] + nums[L] + nums[R]; //这是每一次循环的三数之和

            if(sum == 0){ 

                res.push([nums[i],nums[L],nums[R]]); //如果和等于0则往result内存储结果

                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                
                while (L<R && nums[R] == nums[R-1]) R--; // 去重

                L++;
                R--;
            }

            else if (sum < 0) L++;

            else if (sum > 0) R--;
        }
    }

    return res
}