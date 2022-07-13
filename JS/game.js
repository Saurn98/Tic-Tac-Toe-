one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");
seven = document.getElementById("seven");
eight = document.getElementById("eight");
nine = document.getElementById("nine");

console.log(one, two, three, four, five, six, seven, eight, nine);

var player1name = sessionStorage.getItem('player1username');
var player2name = sessionStorage.getItem('player2username');

p1Score = 0;
p2Score = 0;

p1Score_text = document.getElementById('p1score');
p2score_text = document.getElementById('p2score');

score();

turn = player1name 
turn_text = document.getElementById("turn");
console.log(turn_text)    
setInfoText();

one.addEventListener('click', function(){
    click(one);
})
two.addEventListener('click', function(){
    click(two);
})
three.addEventListener('click', function(){
    click(three);
})
four.addEventListener('click', function(){
    click(four);
})
five.addEventListener('click', function(){
    click(five);
})
six.addEventListener('click', function(){
    click(six);
})
seven.addEventListener('click', function(){
    click(seven);
})
eight.addEventListener('click', function(){
    click(eight);
})
nine.addEventListener('click', function(){
    click(nine);
})

var a = one.firstElementChild
console.log(a)

function click(clickedObject){
    firstChild = clickedObject.firstElementChild;
    secondChild = clickedObject.lastElementChild;
    if (firstChild.classList.contains('active') || (secondChild.classList.contains('active'))){
        return
    } else {
        if (turn == player1name){
            var a = clickedObject.firstElementChild
            console.log(a)
            a.classList.add('active');
            turn = player2name
        } else {
            var a = clickedObject.lastElementChild
            console.log(a)
            a.classList.add('active');
            turn = player1name
        }
        setInfoText();
        check();
        score();
    }
}

function setInfoText(){
    turn_text.innerHTML = "Current Turn : " + turn; 
}

function check(){
    firstCross = one.firstElementChild.classList.contains("active");
    firstCircle = one.lastElementChild.classList.contains("active");
    secondCross = two.firstElementChild.classList.contains("active");
    secondCircle = two.lastElementChild.classList.contains("active");
    thirdCross = three.firstElementChild.classList.contains("active");
    thirdCircle = three.lastElementChild.classList.contains("active");
    fourthCross = four.firstElementChild.classList.contains("active");
    fourthCircle = four.lastElementChild.classList.contains("active");
    fifthCross = five.firstElementChild.classList.contains("active");
    fifthCircle = five.lastElementChild.classList.contains("active");
    sixthCross = six.firstElementChild.classList.contains("active");
    sixthCircle = six.lastElementChild.classList.contains("active");
    seventhCross = seven.firstElementChild.classList.contains("active");
    seventhCircle = seven.lastElementChild.classList.contains("active");
    eighthCross = eight.firstElementChild.classList.contains("active");
    eighthCircle = eight.lastElementChild.classList.contains("active");
    ninethCross = nine.firstElementChild.classList.contains("active");
    ninethCircle = nine.lastElementChild.classList.contains("active");

    win_text = document.getElementById("win-text");
    if (firstCross && secondCross && thirdCross){
        win_text.innerHTML = player1name + " Won";
        p1Score++;
        reset();
    } else if (fourthCross && fifthCross && sixthCross){
        win_text.innerHTML = player1name + " Won";
        p1Score++;
        reset();
    } else if (seventhCross && eighthCross && ninethCross){
        win_text.innerHTML = player1name + " Won";
        p1Score++;
        reset();
    } else if (firstCross && fifthCross && ninethCross){
        win_text.innerHTML = player1name + " Won";
        p1Score++;
        reset();
    } else if (firstCross && fourthCross && seventhCross){
        win_text.innerHTML = player1name + " Won";
        p1Score++;
        reset();
    } else if (secondCross && fifthCross && eighthCross){
        win_text.innerHTML = player1name + " Won";
        p1Score++;
        reset();
    } else if (thirdCross && sixthCross && ninethCross){
        win_text.innerHTML = player1name + " Won";
        p1Score++;
        reset();
    } else if (thirdCross && fifthCross && seventhCross){
        win_text.innerHTML = player1name + " Won";
        p1Score++;
        reset();
    } else if (firstCircle && secondCircle && thirdCircle) {
        win_text.innerHTML = player2name + " Won";
        p2Score++;
        reset();
    } else if (fourthCircle && fifthCircle && sixthCircle) {
        win_text.innerHTML = player2name + " Won";
        p2Score++;
        reset();
    } else if (seventhCircle && eighthCircle && ninethCircle) {
        win_text.innerHTML = player2name + " Won";
        p2Score++;
        reset();
    } else if (firstCircle && fifthCircle && ninethCircle){
        win_text.innerHTML = player2name + " Won";
        p2Score++;
        reset();
    } else if (thirdCircle && fifthCircle && seventhCircle) {
        win_text.innerHTML = player2name + " Won";
        p2Score++;
        reset();
    } else if (firstCircle && fourthCircle && seventhCircle) {
        win_text.innerHTML = player2name + " Won";
        p2Score++;
        reset();
    } else if (secondCircle && fifthCircle && eighthCircle) {
        win_text.innerHTML = player2name + " Won";
        p2Score++;
        reset();
    } else if (thirdCircle && sixthCircle && ninethCircle) {
        win_text.innerHTML = player2name + " Won";
        p2Score++;
        reset();
    } else if ((firstCross || firstCi-rcle) && (secondCross || secondCircle) && (thirdCross || thirdCircle) && (fourthCross || fourthCircle) && (fifthCross ||fifthCircle) && (sixthCross || sixthCircle) && (seventhCross || seventhCircle) && (eighthCross || eighthCircle) && (ninethCross || ninethCircle)){
        win_text.innerHTML = "Draw!";
        reset();
    }
    else {
        return
    }
}

function reset() {
    one.firstElementChild.classList.remove("active");
    one.lastElementChild.classList.remove("active");
    two.firstElementChild.classList.remove("active");
    two.lastElementChild.classList.remove("active");
    three.firstElementChild.classList.remove("active");
    three.lastElementChild.classList.remove("active");
    four.firstElementChild.classList.remove("active");
    four.lastElementChild.classList.remove("active");
    five.firstElementChild.classList.remove("active");
    five.lastElementChild.classList.remove("active");
    six.firstElementChild.classList.remove("active");
    six.lastElementChild.classList.remove("active");
    seven.firstElementChild.classList.remove("active");
    seven.lastElementChild.classList.remove("active");
    eight.firstElementChild.classList.remove("active");
    eight.lastElementChild.classList.remove("active");
    nine.firstElementChild.classList.remove("active");
    nine.lastElementChild.classList.remove("active");
}

function score(){
    p1Score_text.innerHTML =  player1name + " : " + p1Score;
    p2score_text.innerHTML = player2name + " : " + p2Score;
}