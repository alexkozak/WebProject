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


/* пример call */
var user = {
    firstName: "Василий",
    surname: "Петров",
    patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
    alert( this[firstPart] + " " + this[lastPart] );
}

// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.call(user, 'firstName', 'surname'); // "Василий Петров"
showFullName.call(user, 'firstName', 'patronym'); // "Василий Иванович"



/* привязка контекста два примера. один работает, другой - нет */


/*не работает*/
var user = {
    firstName: "Вася",
    sayHi: function() {
        alert( this.firstName );
    }
};

setTimeout(user.sayHi, 1000); // undefined (не Вася!)
// почитать про это https://learn.javascript.ru/bind


/*решение 1. функция-обертка.Теперь код работает, так как user достаётся из замыкания.*/
var user = {
    firstName: "Вася",
    sayHi: function() {
        alert( this.firstName );
    }
};

setTimeout(function() {
    user.sayHi(); // Вася
}, 1000);


/*решение 2. самим написать bind*/
function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

var user = {
    firstName: "Вася",
    sayHi: function() {
        alert( this.firstName );
    }
};

setTimeout(bind(user.sayHi, user), 1000);


/*решение 3. встроенный метод bind*/
function f(a, b) {
    alert( this );
    alert( a + b );
}

// вместо
// var g = bind(f, "Context");
var g = f.bind("Context");
g(1, 2); // Context, затем 3
//те как я понял, если работаешь с this, лучше делать ччерез bind







/*пример декоратора (функция-обертка)*/
var timers = {};

// прибавит время выполнения f к таймеру timers[timer]
function timingDecorator(f, timer) {
    return function() {
        var start = performance.now();

        var result = f.apply(this, arguments); // (*)

        if (!timers[timer]) timers[timer] = 0;
        timers[timer] += performance.now() - start;

        return result;
    }
}

// функция может быть произвольной, например такой:
var fibonacci = function f(n) {
    return (n > 2) ? f(n - 1) + f(n - 2) : 1;
}

// использование: завернём fibonacci в декоратор
fibonacci = timingDecorator(fibonacci, "fibo");

// неоднократные вызовы...
alert( fibonacci(10) ); // 55
alert( fibonacci(20) ); // 6765
// ...

// в любой момент можно получить общее количество времени на вызовы
alert( timers.fibo + 'мс' );
