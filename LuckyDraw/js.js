function runLuckyDraw() {
    // Get the number of prizes
    const numPrizes = parseInt(document.getElementById('prizes').value);
    if (isNaN(numPrizes) || numPrizes <= 0) {
        alert("Please enter a valid number of prizes.");
        return;
    }

    // Total participants
    const totalParticipants = 2300;

    // Generate random winners
    const winners = generateRandomNumbers(numPrizes, totalParticipants);

    // Generate a single lucky number for display
    const luckyNumber = generateRandomNumbers(1, 9999)[0];

    // Update the display
    document.getElementById('luckyNumbers').textContent = luckyNumber + ' .........';
    document.getElementById('winners').textContent = winners.map(winner => `No. ${winner}`).join(', ');
    document.getElementById('totalParticipants').textContent = totalParticipants;
}

function generateRandomNumbers(count, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(numbers);
}
