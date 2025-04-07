const pol = [1, 2, 3];

function getLast(pol, i) {
    if (i + 1 < pol.length) {
        getLast(pol, i + 1);
    } else {
        console.log(pol[i]); // Výpis posledního prvku
    }
}

// Spuštění funkce s argumenty
getLast(pol, 0);
