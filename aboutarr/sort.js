//一冒泡排序
function bublesort(arr) {
    var len = arr.length
    for (let outer = 0; outer < len; outer++) {
        for (let inner = 0; inner <=outer - 1; inner++) {
            if(arr[inner]>arr[inner+1]){
                [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]]
            }
        }
    }
    return arr;
}
//选择排序 
function selectsort(arr){
    var len = arr.length;
    for (let i = 0; i < len-1; i++) {
       for (let j = 0; j < len; indjex++) {
            if(arr[j]<arr[i]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
       }
    }
    return arr
}
//插入排序  从右往左把小的插入它应该在的位置。  
function insertsort(arr) {
  let len = arr.length
  for (let  i= 0; i < len; i++) {
    for (let j = i; j > 0; j--) {
        if(arr[j] < arr[j-1]) {
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
        } else {
            break;
        }
    }    
  }
  return arr
}
//快速排序 随便找一个值最为分割值，比他大的放左边，比他小的放右边。然后再用分好的组继续递归，知道左右长度为1的时候结束
function quickSort(arr) {
    let len =  arr.length
    if(len<=1){
        return arr
    }
    var left,right =[]
    current = arr.splice(0,1)
    for (let index = 0; index < array.length; index++) {
       if(arr[index]<current){
            left.push(arr[index])
       }else{
            right.push(arr[index])
       }
    }
    return quickSort(left).concat(current,quickSort(right))
}
function shellsort(arr,gap) {
    for (let i = 0; i < gap.length; i++) {
        let n = gap[i];
        for(let j = n; j < arr.length; j++) { //接下类和插入排序一样，j循环依次取后面的数
            for(let k = j; k > 0; k-=n) { //k循环进行比较，和直接插入的唯一区别是1变为了n
                if(arr[k] < arr[k-n]) {
                    [arr[k],arr[k-n]] = [arr[k-n],arr[k]];
                    console.log(`当前序列为[${arr}] \n 交换了${arr[k]}和${arr[k-n]}`)//为了观察过程
                } else {
                    continue;
                }
            }
        }
    }
}
