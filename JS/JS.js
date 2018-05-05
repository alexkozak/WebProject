"use strict";


function Animal(name){
    this._name = name;

    Animal.prototype.getName = function () {
        alert("Animal name: " + this._name)
    }
}

function Rabbit(name) {
    Animal.apply(this,arguments);
    Rabbit.prototype = Object.create(Animal.prototype);
    Rabbit.prototype.move = function () {
        alert("Rabbit " + this.getName() + "moves");
    }
}

var rab = new Rabbit("Vasa");
rab.move();


