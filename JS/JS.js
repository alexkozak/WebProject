"use strict";


function Animal(name, mass) {
    Animal.count++;
    Animal.population = [];
    Animal.sortedPopulation = [];

    Animal.f = function () {
        alert('hi nigga');
    };

    var mass = mass;



    function message() {
        alert("name: " + name + ", population: " + Animal.count)
    }
    message();

    function addToPopulation() {
        Animal.population.pop(new Animal());
    }


}

Animal.count=0;

var animal = new Animal("ёжик срейдний");
var animal2 = new Animal("ёжик легкий");
var animal3 = new Animal("ёжик тяжелый");

Animal.f();