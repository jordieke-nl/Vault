var numberContainer = document.getElementById('number-container')
var clickCounter = 0;
var numberContainer
var numberOne;
var numberTwo;
var numberThree;
var greenBlock = document.getElementById("greenBlock");
var redBlock = document.getElementById("redBlock");
var numberButtons = document.getElementsByClassName('button');

var attemptsCounter = 0;

//counter start at zero
var intervalTimer = 0;

document.getElementById("attempts").innerHTML = "Atempts " +  attemptsCounter;
function getNumber(button) {

    clickCounter++;


    if (clickCounter == 1) {
        numberOne = button.value;
        codePlace3 = document.getElementById("codePlace3");

        codePlace3.setAttribute('value', button.value);

    } else if (clickCounter == 2) {
        numberTwo = button.value;
        codePlace1 = document.getElementById("codePlace1");
        codePlace1.setAttribute('value', button.value);
    } else {
        numberThree = button.value;
        codePlace2 = document.getElementById("codePlace2");
        codePlace2.setAttribute('value', button.value);
    }

    if (clickCounter == 3) {
        attemptsCounter++;
        document.getElementById("attempts").innerHTML = "Atempts " +  attemptsCounter;
        if (numberOne == 3 && numberTwo == 2 && numberThree == 2) {
            document.body.style.backgroundImage = "url('images/vaultBackground.jpg')";
            document.getElementById("good-answer").innerHTML = "The code is correct!";
            disableButtons()
            var blink = setInterval(function() {
                intervalTimer++;
                //method to show div on and off
                //change the css of the green and red box to create a blinking effect
                if (greenBlock.style.visibility == 'hidden') {
                    greenBlock.style.visibility = 'visible';
                } else {
                    greenBlock.style.visibility = 'hidden';
                }

                //check if the interval has runned ten times

                if (intervalTimer == 10) {
                    //ClearInterval function stops the interval after 10 times
                    clearInterval(blink);
                    attemptsCounter = 0;
                    document.getElementById("attempts").innerHTML = "Atempts " +  attemptsCounter;
                    reset();
                }
            }, 500);
        } else {
              disableButtons()
            var blink = setInterval(function() {
                intervalTimer++;
                document.getElementById("wrong-answer").innerHTML = "The code is incorrect!";
                //method to show div on and off
                //change the css of the green and red box to create a blinking effect
                if (redBlock.style.visibility == 'hidden') {
                    redBlock.style.visibility = 'visible';
                } else {
                    redBlock.style.visibility = 'hidden';
                }
                //check if the interval has runned ten times

                if (intervalTimer == 10) {
                    //ClearInterval function stops the interval after 10 times
                    clearInterval(blink);
                    if (attemptsCounter == 3) {
                        lock();
                        }
                        else {
                        reset();
                        }
              }
            }, 500);
        }
    }
}

function disableButtons() {
 console.log("disabling");
    //used to loop through all buttons and disable them with attribute disable
    //so that it isn't possible to click more then three times
    for (i = 0; i < numberButtons.length; i++) {
        numberButtons[i].setAttribute('disabled', 'disabled');
    }

}

function enableButtons() {
 console.log("enabling");
    //used to loop through all buttons and enable them again, remove attribute disabled
    for (i = 0; i < numberButtons.length; i++) {
        numberButtons[i].removeAttribute('disabled');
    }

}

function reset()
{
  document.getElementById("good-answer").innerHTML = "";
  document.getElementById("wrong-answer").innerHTML = "";
  codePlace1 = document.getElementById("codePlace1");
  codePlace1.setAttribute('value', "");
  codePlace2 = document.getElementById("codePlace2");
  codePlace2.setAttribute('value', "");
  codePlace3 = document.getElementById("codePlace3");
  codePlace3.setAttribute('value', "");
  clickCounter = 0;
  intervalTimer=0;
  numberOne = "";
  numberTwo = "";
  numberThree = "";
    document.body.style.backgroundImage = "url('images/vaultBackgroundClosed.jpg')";
  enableButtons();
}

function lock()
{
  greenBlock.style.display = 'none';
  document.body.style.backgroundImage = "url('images/redfull.jpg')";
  document.getElementById("wrong-answer").innerHTML = "You have been locked out!";
  disableButtons();
  //achtergrond rood maken
}
