function findDuplicate(nums: number[]): number {
    const numMap = new Map<number, number>()
    for(let i = 0; i < nums.length; i++) {
        const current = nums[i]
        if(numMap.has(current)) {
            return current;
        }
        numMap.set(current, i);
    }
};