function stack() {
    let store = []
    let store2 = []
    this.push = function (e) {
        store.push(e)
        store1.unshift(e)
    }
    this.pop = function (e) {
        return store.pop()
    }
    this.peek = function () {
        return store[store.length-1]
    }
    this.clear = function () {
        return store.length
    }
    this.array = function () {
        return store
    }
    this.array1 = function () {
        return store1
    }
}

var f = new stack()
var str = 'abcdefg'
(function reverseStr(){
    for (let i = 0; i < str.length; i++) {
        f.push(str[i])
    }
    console.log(f.array1().join(''))
})()