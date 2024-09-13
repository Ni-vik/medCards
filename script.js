const flashcards = [
    {
        question: "What are the main differences in the onset of action and duration between Aqueous Penicillin G and Procaine Penicillin G?",
        answer: "Aqueous Penicillin G has a rapid onset and lasts for 6 hours, while Procaine Penicillin G has a moderate onset and lasts for 12-24 hours due to the addition of procaine."
    },
    {
        question: "In what types of infections is Aqueous Penicillin G preferred, and why is it chosen for these cases?",
        answer: "Aqueous Penicillin G is preferred in severe infections such as meningitis, endocarditis, and pneumonia because it achieves high plasma concentrations rapidly."
    },
    {
        question: "Describe how the addition of procaine to Penicillin G alters its characteristics.",
        answer: "The addition of procaine reduces pain during injection and extends the duration of action to 12-24 hours with moderate plasma concentrations, making it suitable for mild to moderate infections."
    },
    {
        question: "Which form of Penicillin G is typically used in the treatment of syphilis, and what is its duration of action?",
        answer: "Benzathine Penicillin G is used in syphilis treatment, and it has a long duration of action, lasting 3-4 weeks."
    },
    {
        question: "Explain the advantages of Benzathine Penicillin G over other preparations for long-term prophylaxis.",
        answer: "Benzathine Penicillin G has the longest duration of action (3-4 weeks), making it ideal for long-term prophylaxis, such as in rheumatic fever."
    },
    {
        question: "Why is Fortified Procaine Penicillin G useful in mild to moderate infections, and how does its combination differ from regular Procaine Penicillin?",
        answer: "Fortified Procaine Penicillin G has both procaine and penicillin G, providing a rapid onset and extended duration (12-24 hours). It differs from regular Procaine Penicillin by offering higher plasma concentrations."
    },
    {
        question: "What are the common adverse reactions associated with Penicillin G preparations?",
        answer: "Common adverse reactions include skin rashes, urticaria (hives), and fever."
    }
];

let currentIndex = 0;
const flashcard = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');

// Display the first flashcard
function displayFlashcard(index) {
    flashcardFront.textContent = flashcards[index].question;
    flashcardBack.textContent = flashcards[index].answer;
}

// Toggle between front and back side of flashcard
flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
});

// Move to the next flashcard
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    flashcard.classList.remove('flipped');
    displayFlashcard(currentIndex);
});

// Move to the previous flashcard
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = flashcards.length - 1;
    }
    flashcard.classList.remove('flipped');
    displayFlashcard(currentIndex);
});

// Initial flashcard display
displayFlashcard(currentIndex);
