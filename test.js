function getvaribleType(source){
    var dataType = {
        '[object Null]' : 'null',
        '[object Undefined]' : 'undefiend',
        '[object Boolean]' : 'boolean',
        '[object Number]' : 'number',
        '[object String]' : 'string',
        '[object Function]' : 'function',
        '[object Array]' : 'array',
        '[object Date]' : 'date',
        '[object RegExp]' : 'regexp',
        '[object Object]' : 'object',
        '[object Error]' : 'error'
    };
    let toString = Object.prototype.toString;
    let type = ''
    for (const key in dataType) {
        if(toString.call(source)==key){
            return dataType[key]
        }
    }
    return 'unknown type';
}
function getvaribleTypeUseMap(source){
    debugger
    var dataType = new Map([
        ['[object Null]' , 'null'],
        ['[object Undefined]' , 'undefiend'],
        ['[object Boolean]' , 'boolean'],
        ['[object Number]' , 'number'],
        ['[object String]' , 'string'],
        ['[object Function]' , 'function'],
        ['[object Array]' , 'array'],
        ['[object Date]' ,'date'],
        ['[object RegExp]' , 'regexp'],
        ['[object Object]' , 'object'],
        ['[object Error]' , 'error']
    ]);
    let toString = Object.prototype.toString;
    if(dataType.has(toString.call(source))){
       return dataType.get(toString.call(source))
    }else{
        return 'unknown type';
    }
}
console.log(getvaribleTypeUseMap([1,2]))