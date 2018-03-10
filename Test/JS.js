"use strict";


function makeGroup() {
    var group = [];

    function addPerson(name) {
        group.push(name);
    }


    addPerson.clear = function () {
        group.splice(0);
    }

    addPerson.getGroup = function () {
        for (var i=0; i<group.length; i++){
            alert(group[i]);
        }
    }

    return addPerson;
}


{
    var c1 = makeGroup();
    c1("Vasa");
    c1("Sasha");
    c1("Masha");
    c1.getGroup();
    c1.clear();
    c1.getGroup();

}


function makeGroup2() {
    var group = [];

    return{
        addPerson2: function (name) {
            group.push(name);
        },

        clear2: function () {
            group.splice(0);
        },

        getGroup2: function () {
            for (var i=0; i<group.length; i++){
                alert(group[i]);
            }
        }
    }
}

{
    var c2 = makeGroup2();
    c2.addPerson2("ppp");
    c2.addPerson2("ddd");
    c2.addPerson2("fff");
    c2.getGroup2();
    c2.clear2();
    c2.getGroup2();

}



var makeGroup3 = {
    group3: [],

    addPerson3: function (name) {
        this.group3.push(name);
    },

    clear3: function () {
        this.group3.splice(0);
    },

    getGroup3: function () {
        for (var i=0; i<this.group3.length; i++){
            alert(this.group3[i]);
        }
    }
}

{
    var c3 = makeGroup3;
    c3.addPerson3("111");
    c3.addPerson3("222");
    c3.addPerson3("333");
    c3.getGroup3();
    c3.clear3();
    c3.getGroup3();
}






/*
function makeBuffer() {
    var text = '';

    function buffer(piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    };

    buffer.clear = function() {
        text = "";
    }

    return buffer;
};

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""
*/

/*
 function makeCounter() {
 var currentCount = 1;

 // возвращаемся к функции
 function counter() {
 return currentCount++;
 }

 // ...и добавляем ей методы!
 counter.set = function(value) {
 currentCount = value;
 };

 counter.reset = function() {
 currentCount = 1;
 };

 return counter;
 }

 var counter123 = makeCounter();

 alert( counter123() ); // 1
 alert( counter123() ); // 2

 counter123.set(5);
 alert( counter123() ); // 5

 */


/*
 function client() {
 var clientName;
 var clientBalance;


 return{
 newClient: function (name) {
 clientName = name;
 clientBalance = 0;
 alert ("зарегистрирован новый клиент: " + clientName);
 },

 putMoney: function (amount) {
 clientBalance += amount;
 alert("клиент: " + clientName + " пополнил баланс на: " + amount);
 },

 takeMoney: function (amount) {
 clientBalance -= amount;
 alert("клиент: " + clientName + " снял с баланса: " + amount);
 },

 getBalance: function () {
 alert("баланс " + clientName + " составляет: " + clientBalance);
 }

 };
 }

 var cl = client();
 cl.newClient("vasa");
 cl.putMoney(100);
 cl.putMoney(300);
 cl.takeMoney(20);
 cl.getBalance();//380
 */