// Get DOM elements
const adviceText = document.getElementById('advice-text');
const adviceId = document.getElementById('advice-id');
const generateBtn = document.getElementById('generate-btn');

// Function to fetch advice
async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const advice = data.slip; // API returns advice in a "slip" object
        adviceText.textContent = `"${advice.advice}"`;
        adviceId.textContent = `Advice #${advice.id}`;
    } catch (error) {
        adviceText.textContent = 'Oops, something went wrong. Try again!';
        adviceId.textContent = '';
        console.error('Error fetching advice:', error);
    }
}

// Event listener for button click
generateBtn.addEventListener('click', fetchAdvice);

// Load advice on page load
fetchAdvice();