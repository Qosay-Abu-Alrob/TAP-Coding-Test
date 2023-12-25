function findMissing(nums)
{
    let n=nums.length;
    let totalSum = (n * (n + 1)) / 2;
    for(let i=0;i<n;i++)
    {
        totalSum-=nums[i];
    }
    return totalSum;
}
let array=[1];
console.log(findMissing(array));