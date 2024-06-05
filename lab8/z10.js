function cenzura(niedozwoloneSlowa, zdanie) {
    const slowa = zdanie.split(' ');

    const wynik = slowa.map(slowo => {
        if (niedozwoloneSlowa.includes(slowo)) {
            return '*'.repeat(slowo.length);
        } else {
            return slowo;
        }
    });

    const zdanieCenzura = wynik.join(' ');
    return zdanieCenzura;
}

const wynik = cenzura(['Ala', 'kot'], 'Ala ma kota i psa');
console.log(wynik);