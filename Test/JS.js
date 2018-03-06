"use strict";


var clients = []; //внутри будет храниться объект со свойствани

var abstractClient = {
    name:"",
    balance:0
};




function newClient(newClientName) {
    name = newClientName;
    alert("зарегистрирован клиент: " + name);
}

function putMoney(amount) {
    balance = balance + amount;
    alert(name + " внес: " + amount);

}

function getMoney(amount) {
    balance = balance - amount;
    alert(name + " снял: " + amount);
}

function getInfo() {
    alert("имя: " + name + " баланс: " + balance);
}

clients.push(newClient("Vasa"));

