"use strict";

(function _callee() {
  var fetchResult, response, quizContainer, resultsContainer, submitButton, newButton, numberOfSlides, currentSlide, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, answers, correct, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, itemIncorrect, incorrect, template, slides, activateSlide, prevButton, nextButton, shuffleArray;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          shuffleArray = function _ref2(array) {
            for (var i = 0; i < array.length - 1; i++) {
              // random number erstellen
              var j = Math.floor(Math.random() * array.length); // tauschen

              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }

            return array;
          };

          activateSlide = function _ref(number) {
            if (number < 0 || number >= numberOfSlides) {
              return;
            }

            slides[currentSlide].classList.remove("active-slide");
            slides[number].classList.add("active-slide");
            currentSlide = number; // Wenn der Slider bei Frage 0 ist, wird der NextButton verstecken

            if (currentSlide === 0) {
              prevButton.style.display = "none";
            } else {
              prevButton.style.display = "inline-block";
            } // Bei der Frage 20 wird der PrevButton versteckt


            if (currentSlide === numberOfSlides - 1) {
              nextButton.style.display = "none";
            } else {
              nextButton.style.display = "inline-block";
            }
          };

          _context.next = 4;
          return regeneratorRuntime.awrap(fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple'));

        case 4:
          fetchResult = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(fetchResult.json());

        case 7:
          response = _context.sent;
          //console.log(questions);
          // Selektionieren
          quizContainer = document.getElementById('quiz');
          resultsContainer = document.getElementById('results');
          submitButton = document.getElementById('submit');
          newButton = document.getElementById("new");
          numberOfSlides = response.results.length; //console.log("slide " + numberOfSlides)

          currentSlide = 0;
          /*  - Durch die gesamte API durch iterieren
              - Template für die "Frage" erstellen und diesed auslesen
              - Im DOM ausgeben
              - Template für Korrekte und Falsche Antworten erstellen
              - Beide im DOM ausgeben
              - Prev/Next Buttons Selectionieren
              */
          // for..in Loop durch response.results, mit "item" kann man danach darauf zugreifen

          i = 0;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 18;
          _iterator = response.results[Symbol.iterator]();

        case 20:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 51;
            break;
          }

          item = _step.value;
          //console.log(item)
          answers = []; // Div für die Korrekte Antwort

          correct = "<label>\n         <input type=\"radio\" name=\"answer".concat(i, "\" value=\"right\">\n         ").concat(item.correct_answer, " Korrekt\n         </label>");
          answers.push(correct);
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context.prev = 28;

          for (_iterator3 = item.incorrect_answers[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            itemIncorrect = _step3.value;
            //console.log("incorrecht: " +itemIncorrect)
            // Div für falsche Antworten
            incorrect = "<label>\n            <input type=\"radio\" name=\"answer".concat(i, "\" >\n            ").concat(itemIncorrect, "\n            </label>");
            answers.push(incorrect);
          } //console.log("antwort: " + answers)


          _context.next = 36;
          break;

        case 32:
          _context.prev = 32;
          _context.t0 = _context["catch"](28);
          _didIteratorError3 = true;
          _iteratorError3 = _context.t0;

        case 36:
          _context.prev = 36;
          _context.prev = 37;

          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }

        case 39:
          _context.prev = 39;

          if (!_didIteratorError3) {
            _context.next = 42;
            break;
          }

          throw _iteratorError3;

        case 42:
          return _context.finish(39);

        case 43:
          return _context.finish(36);

        case 44:
          answers = shuffleArray(answers); // Template for Anwsers/Question

          template = "<div class=\"slide\">\n        <div class=\"question\">\n        ".concat(item.question, "\n        </div>\n        <div class=\"answers\">\n        ").concat(answers.join(''), "\n        </div>\n        </div> "); // In DOM einfügen

          quizContainer.innerHTML += template;
          i++;

        case 48:
          _iteratorNormalCompletion = true;
          _context.next = 20;
          break;

        case 51:
          _context.next = 57;
          break;

        case 53:
          _context.prev = 53;
          _context.t1 = _context["catch"](18);
          _didIteratorError = true;
          _iteratorError = _context.t1;

        case 57:
          _context.prev = 57;
          _context.prev = 58;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 60:
          _context.prev = 60;

          if (!_didIteratorError) {
            _context.next = 63;
            break;
          }

          throw _iteratorError;

        case 63:
          return _context.finish(60);

        case 64:
          return _context.finish(57);

        case 65:
          slides = document.querySelectorAll(".slide");
          // Prev/Next Button
          prevButton = document.querySelector("#previous");
          nextButton = document.querySelector("#next");
          prevButton.addEventListener('click', function () {
            // console.log("prevButton")
            activateSlide(currentSlide - 1);
          });
          nextButton.addEventListener('click', function () {
            //console.log("nextButton")
            activateSlide(currentSlide + 1);
          }); // Browser neu Laden

          newButton.addEventListener('click', function () {
            window.location.reload();
          });
          submitButton.addEventListener('click', function () {
            var counter = 0;
            var answers = document.getElementsByTagName("input");
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = answers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var item = _step2.value;

                if (item.checked && item.value == "right") {
                  counter++;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            resultsContainer.innerHTML = "you have ".concat(counter, " correct answers");
          });
          activateSlide(0);

        case 73:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[18, 53, 57, 65], [28, 32, 36, 44], [37,, 39, 43], [58,, 60, 64]]);
})();