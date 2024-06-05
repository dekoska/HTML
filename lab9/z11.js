function Auto(cena_wyjsciowa, cena_koncowa) {
    this.rok = null;
    this.przebieg = null;
    this.cena_wyjsciowa = cena_wyjsciowa;
    this.cena_koncowa = cena_koncowa;

    this.higherStartPrice = function() {
        this.cena_wyjsciowa = this.cena_wyjsciowa + 1000;
    }

    this.lowerEndPrice = function(presentYear) {
        this.cena_koncowa = this.cena_wyjsciowa - (presentYear - this.rok) * 1000;
    }

    this.lowerMillageEndPrice = function() {
        this.cena_koncowa = this.cena_koncowa - Math.round(this.przebieg / 100000);
    }

    this.addInfoCar = function(year, mileage) {
        this.rok = year;
        this.przebieg = mileage;

        this.lowerEndPrice(2024);
        this.lowerMillageEndPrice();
    }
}

var array = [];

var addCarArray = function(auto) {
    if (auto.cena_wyjsciowa > 10000) {
        array.push(auto);
    }
}

var higherYear = function() {
    array.forEach(function(auto) {
        auto.rok = auto.rok + 1;
    });
}

var auto1 = new Auto(8000, 15000);
auto1.addInfoCar(2010, 120000);

var auto2 = new Auto(12000, 18000);
auto2.addInfoCar(2015, 80000);

var auto3 = new Auto(9000, 16000);
auto3.addInfoCar(2012, 150000);

addCarArray(auto1);
addCarArray(auto2);
addCarArray(auto3);

higherYear();

console.log("Tablica zmianie roku:");
console.log(array);


