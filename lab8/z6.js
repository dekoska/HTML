function choinkaNoca(height) {
    // Sprawdź czy wysokość jest co najmniej 1
    if (height < 1) {
        console.log("Wysokość musi być większa lub równa 1.");
        return;
    }

    // Iteruj po każdym wierszu
    for (let i = 0; i < height-1; i++) {
        let line = '';

        // Dodaj gwiazdki na lewej stronie (rosnąco)
        for (let j = 0; j < height - i - 1; j++) {
            line += '*';
        }

        // Dodaj spacje w środku
        let spacesCount = 2 * i;
        for (let j = 0; j < spacesCount; j++) {
            line += ' ';
        }

        // Dodaj gwiazdki na prawej stronie (rosnąco)
        for (let j = 0; j < height - i - 1; j++) {
            line += '*';
        }

        // Wyświetl wiersz
        
        console.log(line);

    }

    // Dolna część choinki (same gwiazdki)
    let bottomLine = '';
    for (let i = 0; i < 4+height; i++) {
        bottomLine += '*';
    }
    console.log(bottomLine);
}

// Przykładowe użycie
choinkaNoca(6);