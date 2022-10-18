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