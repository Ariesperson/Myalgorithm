function testlet(){
    for(let i =0;i<10;i++){
        const a = 1
        console.log(i)
    }
}
function testSet() {
    let set = new Set()
    set.add(1)
    set.add(null)
    set.add(undefined)
    set.add(+0)
    set.add(-0)
    console.log(set)
}
testSet()