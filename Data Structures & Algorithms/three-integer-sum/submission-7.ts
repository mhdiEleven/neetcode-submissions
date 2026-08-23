class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a, b) => a - b);
        console.log(nums)
        let result = new Set<number[]>();
        for (let i = 0; i < nums.length; i++) {
            let target = -nums[i];
            //now we solve it like we solve twosumTwo
            let l = i + 1;
            let r = nums.length - 1;
            while (r >= l) {
                //skip duplicates
                if (r == l) break;
                r == i && r--;
                //twosumTwo
                let num = nums[l] + nums[r];
                if (num == target) {
                    console.log([i,l,r])
                    result.add([nums[i], nums[l], nums[r]]);
                    while(nums[i] == nums[i+1]) i++
                    while(nums[l] == nums[l+1]) l++
                    while(nums[r] == nums[r-1]) r = r-1
                    l++
                    r--
                }
                if (num > target) r--;
                if (num < target) l++;
            }
        }
        //duplicates have been a pain so i guess i have to write something to remove them
        //brute force solution because were already O(n^2 who cares)

        return [...result];
    }
}
