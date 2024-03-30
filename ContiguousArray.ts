//TC: O(n)
//SC: O(1)
function findMaxLength(nums: number[]): number {
    const map = new Map<number, number>(); // Store running sum -> index
    map.set(0, -1); // Initialize with running sum 0 at index -1
    let maxLength = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        // Increment count for 1 and decrement for 0
        count += nums[i] === 1 ? 1 : -1;

        // If the count is seen before, calculate the length of subarray
        if (map.has(count)) {
            maxLength = Math.max(maxLength, i - map.get(count)!);
        } else {
            map.set(count, i); // Store the index of first occurrence of the count
        }
    }

    return maxLength;
}
