let arr = []

arr[2] = 'hi'

console.log(arr)

class testTable {
    constructor(){
        this.dataMap = []
    }

    put(key, value){
        this.dataMap[key] = value;
    }

    get(key) {
    return this.dataMap[key] === undefined ? -1 : this.dataMap[key];
    };

    remove(key) {
    this.dataMap[key] = undefined;
    };
}


let myhash = new testTable()