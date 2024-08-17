(function() {
    const quizData = [
        {
            question: "What is the capital of France?",
            answers: {
                a: "Berlin",
                b: "Madrid",
                c: "Paris",
                d: "Rome"
            },
            correctAnswer: "c"
        },
        {
            question: "Which language is used for web development?",
            answers: {
                a: "Python",
                b: "JavaScript",
                c: "C++",
                d: "Java"
            },
            correctAnswer: "b"
        },
        {
            question: "Who wrote 'Hamlet'?",
            answers: {
                a: "Charles Dickens",
                b: "William Shakespeare",
                c: "Leo Tolstoy",
                d: "Mark Twain"
            },
            correctAnswer: "b"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: {
                a: "Earth",
                b: "Venus",
                c: "Mars",
                d: "Jupiter"
            },
            correctAnswer: "c"
        },
        {
            question: "Which ocean is the largest?",
            answers: {
                a: "Atlantic Ocean",
                b: "Indian Ocean",
                c: "Pacific Ocean",
                d: "Arctic Ocean"
            },
            correctAnswer: "c"
        }
    ];

    function buildQuiz() {
        const output = [];
        quizData.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join("")}</div>`
            );
        });
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
        quizData.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });
        resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    buildQuiz();

    submitButton.addEventListener('click', showResults);
})();
