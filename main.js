(async()=>{
    const fetchResult = await fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple');
    const response = await fetchResult.json();
    //console.log(questions);

    // Selektionieren
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    let numberOfSlides = response.results.length;
    //console.log("slide " + numberOfSlides)
    let currentSlide = 0;

   /*  - Durch die gesamte API durch iterieren
       - Template für die "Frage" erstellen und diesed auslesen
       - Im DOM ausgeben
       - Template für Korrekte und Falsche Antworten erstellen
       - Beide im DOM ausgeben
       - Prev/Next Buttons Selectionieren
       */


    // for..in Loop durch response.results, mit "item" kann man danach darauf zugreifen
    for(const item of response.results) {
        //console.log(item)

        let answers = []


         // Div für die Korrekte Antwort
        const correct =
         `<label>
         <input type="radio" name="right">
         ${item.correct_answer} HIER
         </label>`;

         answers.push(correct)

        for(const itemIncorrect of item.incorrect_answers){
            //console.log("incorrecht: " +itemIncorrect)

            // Div für falsche Antworten
            const incorrect =
            `<label>
            <input type="radio" name="wrong">
            ${itemIncorrect}
            </label>`;

            answers.push(incorrect)


        }

        //console.log("antwort: " + answers)


        answers = shuffleArray(answers)

        // Template for Anwsers/Question
        const template =
        `<div class="slide">
        <div class="question">
        ${item.question}
        </div>
        <div class="answers">
        ${answers.join('')}
        </div>
        </div> `;

        // In DOM einfügen
        quizContainer.innerHTML += template;

    }

    const slides = document.querySelectorAll(".slide");

    function activateSlide(number){
        if (number < 0 || number >= numberOfSlides ){
        return;
        }

        slides[currentSlide].classList.remove("active-slide")
        slides[number].classList.add("active-slide")
        currentSlide = number

        // Wenn der Slider bei Frage 0 ist, wird der NextButton verstecken
        if(currentSlide === 0) {
            prevButton.style.display="none";
        } else {
            prevButton.style.display="inline-block";
        }

        // Bei der Frage 20 wird der PrevButton versteckt
        if(currentSlide === numberOfSlides -1) {
            nextButton.style.display="none";
        } else {
            nextButton.style.display="inline-block";
        }
    }

    // Prev/Next Button
    const prevButton = document.querySelector("#previous");
    const nextButton = document.querySelector("#next");


     prevButton.addEventListener ('click', () => {
       // console.log("prevButton")

      activateSlide(currentSlide-1)
    })


    nextButton.addEventListener ('click', () => {
    //console.log("nextButton")

    activateSlide(currentSlide+1)
    })

    submitButton.addEventListener('click', () => {

    let counter = 0;    

    let answers = document.getElementsByTagName("input")
    for(const item of answers){
    if (item.checked && item.name == "right"){
        counter++
    }

    }

    resultsContainer.innerHTML = `you have ${counter} correct answers`;





    })

    activateSlide(0)

    function shuffleArray(array) {
        for (var i = 0; i < array.length - 1; i++) {
            // random number erstellen
            var j = Math.floor(Math.random() * (array.length));
            // tauschen
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
      }


})();
