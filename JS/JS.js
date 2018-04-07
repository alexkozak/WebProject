"use strict";

function bank() {

    function Account(name, balance) {
        this.name = name;
        this.balance = balance;

        this.getBalance = function () {
            alert("name: " + this.name + ", balance: " + this.balance);
        };

        this.putMoney = function (amount) {
            this.balance += amount;
            alert("name: " + this.name + " put money: " + amount + ", balance: " + this.balance);
        };

        this.getMoney = function (amount) {
            this.balance -= amount;
            alert("name: " + this.name + " get money: " + amount + ", balance: " + this.balance);
        }


    }


    var volandemort = new Account("Volandemort", 500);
    volandemort.getBalance();
    volandemort.putMoney(100);
    volandemort.getMoney(50);
    volandemort.getBalance();
    //550


    var vasa = new Account("Vasa", 100);
    vasa.getBalance();
    vasa.putMoney(200);
    vasa.getBalance();
    //300



}

bank();













