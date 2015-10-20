import { square, diag } from './lib';

// presentation !

// const PI = 3.14;
// console.log(PI); // 3.14
//
// Object.defineProperty(window, "PI", {
//     value:        3.14,
//     enumerable:   true,
//     writable:     false,
//     configurable: false
// });
//
// console.log(PI); // 3.14

// let obj = {a:1, b:2, c:3};
//
// for (let i in obj) {
// 	console.log(i);
// }
//
// console.log(i); // i is not defined

// const PI = 3.14;
// let x = `This
// is legal on ES6,
// LOLOL ${PI}`;
//
// console.log(x);
//
// var params = [ "lola", true, 7 ];
// var other = [ 1, 2 ].concat(params); // [ 1, 2, "lola", true, 7 ]
// func.apply(undefined, [ 1, 2 ].concat(params)) === 9;
//
// var str = "foo";
// var chars = str.split(""); // [ "f", "o", "o" ]

// class Hero {
//    constructor(name, power) {
//       this._name = name;
//       this._power = power;
//    }
//    print() {
//       return this._name + ": " + this._power;
//    }
// }
//
// console.log(new Hero('Lobezno', 90).print());

// function Hero(name, power) {
//    this._name = name;
//    this._power = power;
// }
//
// Hero.prototype.print = function(){
//    return this._name + ": " + this._power;
// }

// console.log(new Hero('Lobezno', 90).print());
// Lobezno, 90

// function Hero(name, power) {
//   Object.defineProperty(this, 'name', {
//     get: function() { return name; }
//   });
//
//   Object.defineProperty(this, 'power', {
//     get: function() { return power; }
//   });
// }
//
// Hero.prototype.print = function() {
//   return this.name + ', ' + this.power;
// }
//
// var Batman = new Hero('Batman', 0);
// console.log(Batman.print()); // Batman, 0


// console.clear();
//
// var list = [ 1, 2, 3 ];
// var [ a, , b ] = list;
//
// console.log([a, b]); // [1, 3]
// [a, b] = [b, a];
// console.log([a, b]); // [3, 1]
//
//
// var o = {p: 42, q: true};
// var {p, q} = o;
//
// console.log(p); // 42
// console.log(q); // true

// let piece = {name : 'Bar'};
// let print = () => console.log("LOLA");
//
// let obj = {
//     piece,
//     print
// };
//
// obj.print();

// class Hero {
//    constructor(name, power) {
//       this._name = name;
//       this._power = power;
//    }
//    print() {
//       return this._name + ', ' + this._power;
//    }
// }
//
// class SuperHero extends Hero {
//    constructor(name, power) {
//       super("Super " + name, power * 3);
//   }
// }
//
// console.log(new SuperHero('davesnx', 100).print());

var target = {};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  }
};

var s = new Set();

s.add(1).add(5).add('lola').add({a: 1, b: 2});

s.has(1); // true
s.has(3); // false
s.has("lola"); // true

s.size; // 4

s.delete(5); // removes 5 from the set
s.has(5); // false, 5 has been removed

for (let item of s) console.log(item);
for (let item of s.keys()) console.log(item);
for (let item of s.values()) console.log(item);








var m = new Map();

var obj = {};
var str = "a string";

m.set(str, "value associated with 'a string'");
m.set(obj, "value associated with obj");

m.size; // 2

m.get(str); // "value associated with 'a string'"
m.get(obj); // "value associated with obj"

m.get("a string"); // "value associated with 'a string'"
                       // because str === 'a string'

for (let item of m) console.log(item);
for (let item of m.keys()) console.log(item);
for (let item of m.values()) console.log(item);






var wm1 = new WeakMap();
var wm2 = new WeakMap();
var o1 = {};
var o2 = function(){};

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2);
wm2.set(wm1, wm2);

wm1.get(o2); // "azerty"
wm1.has(o2); // true

wm2.get(o2); // undefined
wm2.has(o2); // false

function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})
