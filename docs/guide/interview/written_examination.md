---
date: 2024-08-20
category:
  - 笔试大全
tag:
  - 笔试
archive: true
---

# 笔试大全

## a=? console.log(a===1&a===2&a===3)

``` js
/**
 * 解题思路
 * 
 * 对象比较时都会指向 valueOf 和 toString 方法，重写 valueOf 和 toString 方法 即可
 * 
 */
const a ={
  num：1,
  valueOf:()=>{
    return this.num ++
  }
}
// 或者
const a = {
  num: 1,
  toString: () => {
    return this.num++
  }
}

console.log(a === 1 && a === 2 && a === 3) // true

```

## 不改变下面代码，修改obj的值

```js
const o = (function(){
  const obj= {
    a: 1,
    b: 2,
  }
  return {
    get(k)=>{
      return obj[k]
    }
  }
})()

/**
 * 当前我们只能通过fn.get('a')去获得obj属性a的值，
 * 要想更改a或者b或者给obj添加其他属性，
 * 可通过如下方式给对象原型上添加属性abc 使用访问器返回当前对象
 * 
*/
Object.defineProperty(Object.prototype, 'getObj', {
  get() {
    return this
  }
})
const res = o.get('getObj') // {a:1,b:2}
res.d = 3
res.c = 4
console.log(o.get('getObj')) // {a:1,b:2，c:4,d:3}

```

---
