var arrayPairSum = function(nums) {
    return nums.sort(function(a,b){return (a-b)})
                .map((a,i)=>(i%2==0)?a:0)    
                .reduce((a,b)=>(a+b));
};
console.log(arrayPairSum([6,2,6,5,1,2]));