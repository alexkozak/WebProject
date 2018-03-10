"use strict";

/* ------------ */
/* примеры кода */
/* ------------ */


/* ниже 3 примера по работе с объектами */


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



/*пример this */

var user = { firstName: "Вася" };
var admin = { firstName: "Админ" };

function func() {
    alert( this.firstName );
}

user.f = func;
admin.g = func;

// this равен объекту перед точкой:
user.f(); // Вася
admin.g(); // Админ
admin['g'](); // Админ (не важно, доступ к объекту через точку или квадратные скобки)


/* создание объектов через new */

function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "Моё имя: " + this.name );
    };
}

var ivan = new User("Иван");

ivan.sayHi(); // Моё имя: Иван

/*
 ivan = {
 name: "Иван",
 sayHi: функция
 }
 */

/* пример get */

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // age будет высчитывать возраст по birthday
    Object.defineProperty(this, "age", {
        get: function() {
            var todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

var pete = new User("Петя", new Date(1987, 6, 1));

alert( pete.birthday ); // и дата рождения доступна
alert( pete.age );      // и возраст //тут не нужно писать pete.age(), но можно сделать обработку значения, потом изменить...



/* -----ПИЗДЕЦ----- */
var user = {
    name: "Вася",
    hi: function() { alert(this.name); },
    bye: function() { alert("Пока"); }
};

user.hi(); // Вася (простой вызов работает)

// а теперь вызовем user.hi или user.bye в зависимости от имени
(user.name == "Вася" ? user.hi : user.bye)(); // undefined
//это фишка this

