var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.mod = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        console.log("Czesc rzeczywista: " + this.real + ", Czesc urojona: " + this.imaginary);
    };
    return Complex;
}());
//stworzenie dwoch obiekotw typu Complex
var a = new Complex(10, 2);
var b = new Complex(8, 1);
console.log("Obiekt pierwszy:");
a.toString();
console.log("\nObiekt drugi:");
b.toString();
//dodanie dwoch obiektow
var c = a.add(b);
//wyswietlenie wyniku dodawania
console.log("\nWynik dodawania dwoch obiektow: ");
c.toString();
//odjecie od wyniku pierwszego obiektu
var d = c.sub(a);
//wyswietlenie wyniku dodawania
console.log("\nWynik odejmowania dwoch obiektow");
d.toString();
//modul
var e = a.mod();
//wyswietlenie modulu
console.log("\nModul wynosi: ");
e.toString();
