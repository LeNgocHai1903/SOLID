const showResult = (message) => {
    console.log(message);
};

class BuyShoes {
  constructor(currentMoneyInWallet) {
    this.currentMoneyInWallet = currentMoneyInWallet;
  }

  checkPrice(price) {
    if (price > this.currentMoneyInWallet) {
      showResult("U can not buy it");
    } else {
      showResult("U can buy it");
    }
  }

  
}

const maxMoney = new BuyShoes(1000);
maxMoney.checkPrice(300);
