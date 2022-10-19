function telephoneCheck(str) {
    let c1= /\(/.test(str);
    let c2= /\)/.test(str);
    let arr=[];
    if((c1 && c2) || (c1==false && c2==false))
       arr=str.split(/[-\s\(\)]+/);
    else
      return false;
    console.log(arr)
    if(arr[0]=="" && arr.length==4)
      arr.splice(0,1);
    for(let i=0;i<arr.length;i++){
      if(arr.length==4){
          if(arr[i]=="1")
            continue;
          else if(arr[i].length==3 || arr[i].length==4)
            continue;
          else
            return false;
      }
      if(arr.length==3){
          if(arr[i].length==3 || arr[i].length==4)
            continue;
          else
            return false;
      }
      if(arr.length==2)
        return false
      if(arr.length==1 && arr[i].length==10)
        return true;
      else
        return false;
  
    }
    return true;
  }
  console.log(telephoneCheck("-1 (757) 622-7382"));
  //question
//   Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has the format of a valid US number.
//The following are examples of valid formats for US numbers (refer to the tests below for other variants):
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
//Your job is to validate or reject the US phone number based on any combination of the formats provided above.
//The area code is required. If the country code is provided, you must confirm that the country code is 1.
//Return true if the string is a valid US phone number; otherwise return false.