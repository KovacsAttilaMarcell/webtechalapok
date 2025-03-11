function startGame() {
    const targetNumber = Math.floor(Math.random() * 1000001); 
    const maxAttempts = 20;
    let attempts = 0;

    while (attempts < maxAttempts) {
        let guess = prompt(`Add meg a(z) ${attempts + 1}. tipped (0 és 1 000 000 között):`);

        guess = parseInt(guess);

        if (isNaN(guess) || guess < 0 || guess > 1000000) {
            alert("Érvénytelen bemenet! Kérlek, egy 0 és 1 000 000 közötti számot adj meg.");
            continue;
        }

        attempts++;

        if (guess === targetNumber) {
            alert(`Gratulálok, ${attempts} lépésből eltaláltad!`);
            return;
        } else if (guess > targetNumber) {
            alert(`${attempts}. tipp nem talált: A megoldás kisebb.`);
        } else {
            alert(`${attempts}. tipp nem talált: A megoldás nagyobb.`);
        }
    }

    alert("Sajnos ez most nem sikerült!");
}
