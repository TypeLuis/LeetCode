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
  console.log(twoSum([7, 0, 11, 15, 12, 23], 11));