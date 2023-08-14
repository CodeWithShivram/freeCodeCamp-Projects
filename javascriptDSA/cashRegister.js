function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    
    var coinValues = [
      { name: 'ONE HUNDRED', val: 100.00 },
      { name: 'TWENTY', val: 20.00 },
      { name: 'TEN', val: 10.00 },
      { name: 'FIVE', val: 5.00 },
      { name: 'ONE', val: 1.00 },
      { name: 'QUARTER', val: 0.25 },
      { name: 'DIME', val: 0.10 },
      { name: 'NICKEL', val: 0.05 },
      { name: 'PENNY', val: 0.01 }
    ];
  
    var totalmoney = cid.reduce(function (x, y) {
      return x + y[1];
    }, 0.0);
  
    if (totalmoney < change) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    };
    
    if (totalmoney === change) {
      return {status: "CLOSED", change: cid};
    };
    var reversecid = cid.slice().reverse();

  var bills = coinValues.reduce(function (acc, next, index) {
    if (change >= next.val) {
      var coins = 0.0;
      while (change >= next.val && reversecid[index][1] >= next.val) {
        change -= next.val;
        change = change.toFixed(2);
        reversecid[index][1] -= next.val;
        coins += next.val;
      }
      acc.push([next.name, coins]);
      return acc;
    }
    else {
      return acc;
    }
  }, []);

  if (change % totalmoney !== 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  };

  return {status: "OPEN", change: bills};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);