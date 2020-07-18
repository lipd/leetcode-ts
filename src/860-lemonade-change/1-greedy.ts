// 贪心算法

function lemonadeChange(bills: number[]): boolean {
  let [five, ten] = [0, 0];
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five < 1) return false;
      five--; ten++;
    }
    else if (bill === 20) {
      if (five > 0 && ten > 0) {
        five--; ten--;
      } else if (five > 2) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true
};