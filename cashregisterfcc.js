function checkCashRegister(price, cash, cid) {
    let d=cash-price,m,l;
    let cur=[0.01,0.05,0.1,0.25,1,5,10,20,100];
    let x=cur.reduce((prev,curr)=>{return Math.abs(curr-d)<Math.abs(prev-d) && curr<d?curr:prev});
    let index=cur.indexOf(x);
    let sum=cid.slice(0,index+1)
               .map(curr=>curr[1])
               .reduce((prev,curr)=> prev+curr);
  //first case open:-
  //test cases for open:
  //checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
  // checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.           
    let open=[];           
    console.log();
    if((sum-d)>0){
        if(cid[index][1]/cur[index] >= d/cur[index]){
          cid[index][1]=d;
          d=0;
          return {status:"OPEN",change:[cid[index]]}
        }
        else if(cid[index][1]/cur[index] < d/cur[index]){
          for(let i=index;i>=0;i--){
            l=cid[i][1]/cur[i];
            m=d/cur[i];
            if(l<m){
              cid[i][1]=Math.floor(l)*cur[i];
              open.push(cid[i]);
              d=d-cid[i][1];
            }
            else if(m<l)
             { 
               cid[i][1]=Math.floor(m)*cur[i];
                open.push(cid[i]);
                d=d-cid[i][1];
             }
            }
      }
      for(let i=0;i<open.length;i++){
        if(open[i][1]==0){
          open.splice(i,1);
          open[i][1]+=cur[open.length-i-1];
        }
      }
      return {status:"OPEN",change:open};
    }
    
  //second case insufficient balance:-
  //test cases for insufficient balance:
  //checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
  // Passed:checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
  if((sum-d)<0){
      return {status:"INSUFFICIENT_FUNDS",change:[]};
  }
  
  //third case closed:-
  //test cases for closed:
  //checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
  let total=cid.map(curr=>curr[1])
               .reduce((prev,curr)=> prev+curr);
  if(total-d==0){
      return {status:"CLOSED",change:cid};
    }
  }
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  