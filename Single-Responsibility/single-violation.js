

class BuyShoes {
    constructor(currentMoneyInWallet) {
        this.currentMoneyInWallet = currentMoneyInWallet;
    }

    checkPrice(price) {
        if (price > this.currentMoneyInWallet) {
            this.showSuccessResult();
        }
        else {
            this.showFailResult();
        }
    }

    showSuccessResult() {
        console.log('You can buy it')
    }

    showFailResult() {
        console.log('You can not buy it')
    }

}

const maxMoney = new BuyShoes(1000);
maxMoney.checkPrice(300);