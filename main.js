(async()=>{
    const fetchResult = await fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple');
    const response = await fetchResult.json();
    //console.log(questions);

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    let slides = response.length;
    let currentSlide = 0;

    for(const item of response.results) {
        console.log(item)

        const template = 
        `<div class="slide active-slide">
        <div class="question">
        ${item.question}
        </div>
        </div> `;

        quizContainer.innerHTML = template;

        const correct =
        `<div class="answer">
        ${item.correct_answer}
        </div> `

        const slide = document.querySelector(".slide");

        slide.innerHTML += correct
        
        for(const itemIncorrect of item.incorrect_answers){
            //console.log("inncorrecht: " +itemIncorrect)
        const incorrect = 
        `<div class="answer">
        ${itemIncorrect}
        </div> `
        
        slide.innerHTML += incorrect

        }
        
        // Next Prev Button bei click slide ändern. (remove class)








    }



})();
  