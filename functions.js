function findMode(arr) {
    // create empty object for storing values
    let object = {}

    for (let i = 0; i < arr.length; i++) {
        if (object[arr[i]]) {
            // increment existing key's value
            object[arr[i]] += 1;
        } else {
            // make a new key and set its value to 1
            object[arr[i]] = 1;
        }
    }

    let highestValue = 0;
    let highestValueKey = 0;

    // finding the biggest value and its key
    Object.keys(object).forEach(key => {
        let value = object[key]
        if (value > highestValue) {
            highestValue = value
            highestValueKey = key
        }
    })

    return highestValueKey;
};

function findMedian(nums) {
    // sort and get the middle number

    nums.sort((a, b) => a - b);

    let middle = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middle] + nums[middle - 1]) / 2;
    } else {
        median = nums[middle];
    }
    return median
};

function findMean(nums) {

    let total = 0

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    let mean = total / nums.length;

    return mean;
}

module.exports = {
    findMode,
    findMean,
    findMedian
}