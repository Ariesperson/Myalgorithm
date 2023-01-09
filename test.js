let obj = { name:'chensy'};
const pr = new Proxy(obj,{
    get(target, key){
        return target[key]
    },
    set(target, key, newVal){
        // target[key] = newVal
    }
})
pr.name = '1'
console.log(obj)