// run on node.js

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// num 1.
var twoSum = function (nums, target) {
    let hashmap = {};
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (complement in hashmap) {
        console.log(hashmap);
        return [i, hashmap[complement]];
      }
      hashmap[nums[i]] = i;
    }
    console.log(hashmap);
  };
  console.log(twoSum([7, 0, 11, 15, 12, 23], 26));




// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]


var getConcatenation = function(nums) {
    return [...nums, ...nums]
};


// console.log(getConcatenation([7, 0, 11, 15, 12, 23]))




// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
var isPalindrome = function(x) {
    // One Way:
    // return String(x).split('').reverse().join('') === String(x)

    // Another way:
    let str = x.toString();
    let Arr = [];
    let reverseArr = [];

    // Arr = Array.from(str);
    reverseArr = Array.from(str).reverse();

    // console.log(str)
    for (let i = 0 ; i < str.length ; i++) {
        console.log(str[i])
        if ( str[i] == reverseArr[i] ) {
        } else {
            return false;
        }
    }
    return true;
};

// console.log(isPalindrome(121))


// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// num 21.
// var mergeTwoLists = function(list1, list2) {
//     // let mergeList = [...list1, ...list2].sort()
//     // return mergeList

//     function ListNode(val, next) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }

//     if(!list1) return list2;
//     else if(!list2) return list1;

//     if(list1.val > list2.val) {
//         let temp = list1;
//         list1 = list2;
//         list2 = temp;
//     }
//     let head = list1;
//     while(list1 && list2) {
//     let temp = new ListNode();
//     let node = null;
//         while(list1 != null && list1.val <= list2.val) {
//         node = list1;
//             list1= list1.next;
//     }
//     node.next = list2;
        
//         temp = list1;
//         list1 = list2;
//         list2 = temp;
//     }

//     return head;
// };

// console.log(mergeTwoLists([1,2,3], [1]))






// num 706.


// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

// Constraints:

// 0 <= key, value <= 106
// At most 104 calls will be made to put, get, and remove.


class HashTable {
    constructor(size = 7){
        this.dataMap = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        console.log('hash', hash)
        return hash
    }

    set(key,value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) this.dataMap[index] = []
        
        this.dataMap[index].push([key, value])
        console.log('index', index)
        console.log('this', this)
        return this
    }

    get(key) {
        let index = this._hash(key)
        if(this.dataMap[index]) {
            for(let i = 0; i < this.dataMap[index].length; i++) {
                if(this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }
             }
         }
         return undefined
     }

     remove(key){
        let index = this._hash(key)
        if(this.dataMap[index]){
            for(let i = 0; i < this.dataMap[index].length; i++) {
                if(this.dataMap[index][i][0] === key) {
                    this.dataMap[index].splice(i, 1)
                    return this.dataMap[index]
                }
            }
         }
        return undefined
      }

    keys() {
        let allKeys = []
        for(let i = 0; i < this.dataMap.length; i++) {
            if(this.dataMap[i]) {
                for(let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allKeys
    }
}

let myHashTable = new HashTable()
myHashTable.set('bolts', 1400)

myHashTable.set('watermelon', 2400)







