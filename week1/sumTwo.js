function twoSum(nums, target) {
    // Create an object to store the numbers and their indices
    const numMap = {};
    
    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement
        const complement = target - nums[i];
        
        // Check if the complement is in the object
        if (complement in numMap) {
            // If found, return the indices
            return [numMap[complement], i];
        }
        
        // Otherwise, store the current number and its index
        numMap[nums[i]] = i;
    }
}
