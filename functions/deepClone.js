/** 
 * 深拷贝
*/

function deepClone(data, hash = new WeakMap()){
  // 基本类型
  if(!data || typeof data !== 'object'){
    return data
  }
  // 查哈希表
  if(hash.has(data)){
    return hash.get(data)
  }
  let res = Array.isArray(data) ? [] : {}
  // 哈希表设值
  hash.set(data, res)
  // Object.keys()  返回对象自身的（不含继承的）所有可枚举属性的键名
  // Reflect.ownKeys()  返回对象自身的所有键名
  Reflect.ownKeys(data).forEach((value)=>{
    // 递归
    res[value] = deepClone(data[value], hash)
  })
  return res
}
var arr = [1,2,4]
var c = Symbol("a")
var obj = {
  a: arr,
  b: {
    c: 1,
    d: arr
  }
}
obj[c] = 'localSymbol'
var b = deepClone(obj)