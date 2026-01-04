// BRUTE FORCE 0(n) space
// function findDuplicate(nums: number[]): number {
//     const numMap = new Map<number, number>()
//     for(let i = 0; i < nums.length; i++) {
//         const current = nums[i]
//         if(numMap.has(current)) {
//             return current;
//         }
//         numMap.set(current, i);
//     }
// };

function findDuplicate(nums: number[]): number {
   let slow = 0;
    let fast = 0;
//    Floyd's Cycle Algorithm
//    Loop the fast and slow pointer
   do {
    slow = nums[slow];
    fast = nums[nums[fast]]
    console.log({slowInitial: slow, fastInitial: fast})
   } while (slow !== fast)


//   Now that we have the interseting point, create another slow pointer and return the intersecting point
let slow2 = 0;
do {
  slow = nums[slow];
  slow2 = nums[slow2];
  console.log({slowFinal: slow, slow2Initial: slow2})

} while (slow !== slow2);

return slow
};