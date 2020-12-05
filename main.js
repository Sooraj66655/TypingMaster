const RANDOM_TEXT = [
    "The tiger is the largest extant cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar.",
    "Lucknow, a large city in northern India, is the capital of the state of Uttar Pradesh. Toward its center is Rumi Darwaza, a Mughal gateway. Nearby, the 18th-century Bara Imambara shrine has a huge arched hall. Upstairs, Bhool Bhulaiya is a maze of narrow tunnels with city views from its upper balconies. Close by, the grand Victorian Husainabad Clock Tower was built as a victory column in",
    "Computer Science & Engineering (CSE) is an academic program at many universities which comprises scientific and engineering aspects of computing. CSE is also a term often used in Europe to translate discipline of informatics.",
    "The School is the place Where we learn",
    "This is typing master","Change the world by being yourself","Never regret anything that made you smile","Aspire to inspire before we expire.",
    "Spread love everywhere you go","Always remember that you are absolutely unique.","The purpose of our lives is to be happy.","A problem is a chance for you to do your best."
];

const text = document.getElementById("randomText");
const inputTyping = document.getElementById("typing");
const btn = document.getElementById("button");
const response = document.getElementById("result");
let word1, word2;
let totalTimeInterval = 0;
var timeinterval;
let startTime, endTime;
var flag = 0;

/*************************************Start Function******************************/
const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * RANDOM_TEXT.length);
    text.innerText = RANDOM_TEXT[randomNumber];
    button.innerText = "Stop";
};

/**************************************Stop Function*******************************/
const stopTyping = () => {
    let time = new Date();
    endTime = time.getTime();
    let totalTime = (endTime - startTime) / 1000;
    console.log(totalTime);
    let totalWords = inputTyping.value;
    let wordCount = WordCounter(totalWords);
    let Speed = Math.round((wordCount / totalTime) * 60);
    let result = "Your Typing Speed is " + Speed + " WPM ";
    response.innerText = result;
    result += compareWords(text.innerText, totalWords);
    response.innerText = result;
    window.clearInterval(timeinterval);
};

/********************************************Words Counter***********************************/
const WordCounter = (words) => {
    let response = words.split(" ").length;
    return response;
};

/******************************************Compare Words**************************************/
const compareWords = (string1, string2) => {
    let word1 = string1.split(" ");
    let word2 = string2.split(" ");
    let count = 0;
    word1.forEach(function (item, index) {
        if (item == word2[index]) {
            count++;
        }
    });
    let errorWords = word1.length - count;
    return count + " Correct out of " + word1.length + " words and the total number of errors are " + errorWords + ".";
};

/****************************************Event On Button Click*********************************/
button.addEventListener("click", function () {
    if (this.innerText == "Start") {
        typing.disabled = false;
        btn.disabled = true;
        startTyping();
    } else if (this.innerText == "Stop") {
        typing.disabled = true;
        btn.disabled = true;
        stopTyping();
    }
});

/****************************************Start timer*****************************************/
function startTimer() {
    debugger;
    var textAreaInput = inputTyping.value.length;
    if (flag == 0) {
        if (textAreaInput == 0) {
             let time = new Date();
             startTime = time.getTime();
            btn.disabled = false;
            timeinterval = setInterval(countTime, 1000);
            flag++;
        }
    }
}
function countTime() {
    ++totalTimeInterval;
    var hour = Math.floor(totalTimeInterval / 3600);
    var minute = Math.floor((totalTimeInterval - hour * 3600) / 60);
    var second = totalTimeInterval - (hour * 3600 + minute * 60);
    document.getElementById("timer").innerText = (minute < 10 ? "0" : "") + minute + ":" + (second < 10 ? "0" : "") + second;
}

/****************************************Match Words ******************************************/
function match() {
    var rtext = text.innerText;
    var textValue = inputTyping.value;
    var n = rtext.substring(0, textValue.length);
    if (rtext == textValue) {
        inputTyping.style.color = "black";
       /* document.getElementById("textfield").style.borderColor = "black";*/
        document.getElementById("success").style.display = "block";
        document.getElementById("result").style.display = "block";

        stopTyping();
    } else {
        if (textValue == n) {
            inputTyping.style.color = "green";
           /* document.getElementById("textfield").style.borderColor = "green";*/
            btn.disabled = true;
            document.getElementById("result").style.display = "none";
            document.getElementById("success").style.display = "none";
            
        } else {
            inputTyping.style.color = "#950309";
           /* document.getElementById("textfield").style.borderColor = "red";*/
            document.getElementById("result").style.display = "none";
            document.getElementById("success").style.display = "none";
            
        }
    }
}

/******************************************Start Again Function**************************************/
function startAgain() {
    window.location.reload();
}

/******************************************Function for Stop Timer*********************************/
function stopTimer() {
    window.clearInterval(timeinterval);
}
