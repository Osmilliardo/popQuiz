// var q1Card = $('#questionCard1')
// var q2Card = $('#questionCard2')
// var q3Card = $('#questionCard3')
// var q4Card = $('#questionCard4')
// var q5Card = $('#questionCard5')

var timeLeft = 60
var score = 0

// starts the test
$('#startBtn').on('click', function () {
    if ($('#questionCard1').hasClass('hidden')) {
        $('#questionCard1').removeClass('hidden')
        $('#startScreen').addClass('hidden')
        startTimer()
    } 

})

// next button funtionality
$('#nextBtn1').on('click', function () {
    $('.incorrect').attr("disabled", false)

    if (!$('#questionCard1').hasClass('hidden') && 
         $('#questionCard2').hasClass('hidden'))  {
            $('#questionCard1').addClass('hidden')
            $('#questionCard2').removeClass('hidden')
    }
})

$('#nextBtn2').on('click', function () {
    $('.incorrect').attr("disabled", false)

    if (!$('#questionCard2').hasClass('hidden') && 
         $('#questionCard3').hasClass('hidden'))  {
            $('#questionCard2').addClass('hidden')
            $('#questionCard3').removeClass('hidden')
    }
})

$('#nextBtn3').on('click', function () {
    $('.incorrect').attr("disabled", false)

    if (!$('#questionCard3').hasClass('hidden') && 
         $('#questionCard4').hasClass('hidden'))  {
            $('#questionCard3').addClass('hidden')
            $('#questionCard4').removeClass('hidden')
    }
})

$('#nextBtn4').on('click', function () {
    $('.incorrect').attr("disabled", false)

    if (!$('#questionCard4').hasClass('hidden') && 
         $('#questionCard5').hasClass('hidden'))  {
            $('#questionCard4').addClass('hidden')
            $('#questionCard5').removeClass('hidden')
    }
})

// last button takes user to screen to enter initials
$('#nextBtn5').on('click', function () {

    $('.incorrect').attr("disabled", false)
    $('#finalScore').text('Your final score is ' + score)
    $('#answerCondition').text('')
    timeLeft = 0

    if (!$('#questionCard5').hasClass('hidden') && 
         $('#testComplete').hasClass('hidden'))  {
            $('#questionCard5').addClass('hidden')
            $('#testComplete').removeClass('hidden')
    }
})

// what happens when click the incorrect answer
$('.incorrect').on('click', function () {
    $('.incorrect').attr('disabled', true)
    $('#answerCondition').text('That is incorrect')
    timeLeft -= 10
})

// what happens when you click the correct answer
$('.correct').on('click', function () {
    $('.incorrect').attr('disabled', true)
    $('#answerCondition').text("That is correct!")
    score += 20
})

// timer function
function startTimer() {
setInterval(function () {
    if (timeLeft > 0) {
    timeLeft --;
    }
    $('#timer').text(timeLeft + ' seconds remaining!')

    if (timeLeft === 0) {
        $('.testCards').addClass('hidden')
        $('#finalScore').text('Your final score is ' + score)
        $('#answerCondition').text('')
        $('#testComplete').removeClass('hidden')
        $('#timer').text('')
    }
}, 1000)}