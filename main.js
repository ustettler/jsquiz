(async()=>{
    const fetchResult = await fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple');
    const response = await fetchResult.json();
    //console.log(questions);

    // Selectionieren
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    let slides = response.length;
    let currentSlide = 0;

   /*  - Durch die gesamte API durch iterieren
       - Template für die "Frage" erstellen und dies auslesen
       - Im DOM ausgeben
       - Template für Korrekte und Falsche Antworten erstellen
       - Beide im DOM ausgeben
       - Prev/Next Buttons Selectionieren
       */


    // for..in Loop durch response.results, mit "item" kann man danach darauf zugreifen
    for(const item of response.results) {
        console.log(item)

        // Template for Question
        const template =
        `<div class="slide active-slide">
        <div class="question">
        ${item.question}
        </div>
        </div> `;

        // In DOM einfügen
        quizContainer.innerHTML = template;

        // Div für die Korrekte Antwort
        const correct =
        `<div class="answer">
        ${item.correct_answer}
        </div> `

        const slide = document.querySelector(".slide");

        // Korrekt Antwort in .Slide Ausgeben
        slide.innerHTML += correct

        for(const itemIncorrect of item.incorrect_answers){
            //console.log("incorrecht: " +itemIncorrect)

        // Div für falsche Antworten
        const incorrect =
        `<div class="answer">
        ${itemIncorrect}
        </div> `

        // Falsche Antworten in Slide ausgeben
        slide.innerHTML += incorrect

        }

        // Prev Button
        const prevButton = document.querySelector("#previous");
        const NextButton = document.querySelector("#next");




        // Next Prev Button bei click slide ändern. (remove class)








    }



})();
  