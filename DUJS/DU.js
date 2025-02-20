const readline = require('readline');

// Hlavní funkce
function hlavni() {
    // Vytvoř rozhraní pro čtení vstupu
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Dotaz na vstup pro uživatele
    rl.question('Zadejte číslo v dvojkové soustavě: ', (binarniCislo) => {
        // Ověření, zda zadané číslo je binární
        if (kontrola(binarniCislo)) {
            // Doplnění nul na začátek, aby délka byla dělitelná čtyřmi
            if (binarniCislo.length % 4 == 1) {
                binarniCislo = "000" + binarniCislo;
            } else if (binarniCislo.length % 4 == 2) {
                binarniCislo = "00" + binarniCislo;
            } else if (binarniCislo.length % 4 == 3) {
                binarniCislo = "0" + binarniCislo;
            }

            // Rozdělení binárního čísla na čtveřice
            let ctverice = rozdeleni(binarniCislo);
            console.log("Rozděleno na čtveřice:", ctverice);

            // Převod čtveřic na hexadecimální čísla
            let hexRetezec = prevod(ctverice);
            console.log("Převedeno na hexadecimální:", hexRetezec);
        } else {
            console.log("Nejedná se o binární číslo");
        }

        // Ukončení rozhraní readline
        rl.close();
    });
}

// Kontrola, zda řetězec obsahuje pouze 0 a 1
function kontrola(binarniCislo) {
    return /^[01]+$/.test(binarniCislo);
}

// Rozdělení řetězce na čtveřice
function rozdeleni(binarniCislo) {
    let ctverice = [];
    for (let i = 0; i < binarniCislo.length; i += 4) {
        ctverice.push(binarniCislo.substring(i, i + 4));
    }
    return ctverice;
}

// Převod binárních čtveřic na hexadecimální
function prevod(ctverice) {
    let hexRetezec = [];
    for (let x = 0; x < ctverice.length; x++) {
        let hexCifra = prevodNaHex(ctverice[x]);
        hexRetezec.push(hexCifra);
    }
    return hexRetezec;
}

// Mapování binárních čtveřic na hexadecimální hodnoty
function prevodNaHex(binarniCtverice) {
    const mapaBinNaHex = {
        '0000': '0',
        '0001': '1',
        '0010': '2',
        '0011': '3',
        '0100': '4',
        '0101': '5',
        '0110': '6',
        '0111': '7',
        '1000': '8',
        '1001': '9',
        '1010': 'A',
        '1011': 'B',
        '1100': 'C',
        '1101': 'D',
        '1110': 'E',
        '1111': 'F'
    };
    return mapaBinNaHex[binarniCtverice] || 'Neplatný vstup';
}

// Spuštění hlavní funkce
hlavni();
