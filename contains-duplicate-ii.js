 var containsNearbyDuplicate = function(nums, k) {
    for (var i=0; i < nums.length; i++)
       {
           var j = i + 1;
           var range = k;
           while (range > 0 && j < nums.length)
           {
               if (nums[i] == nums[j])
               {
                   return true;
               }
               j++;
               range--;
           }
       }
       return false;
};
console.log(containsNearbyDuplicate([1,1,0,1],1));
