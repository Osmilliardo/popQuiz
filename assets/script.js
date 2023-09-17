// var q1Card = $('#questionCard1')
// var q2Card = $('#questionCard2')
// var q3Card = $('#questionCard3')
// var q4Card = $('#questionCard4')
// var q5Card = $('#questionCard5')

var timeLeft = 80
var score = 100

// $('.incorrect').attr("disabled", true)

// starts the test
$('#startBtn').on('click', function () {
    if ($('#questionCard1').hasClass('hidden')) {
        // console.log("it is hidden")
        $('#questionCard1').removeClass('hidden')
        $('#startScreen').addClass('hidden')
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

    if (!$('#questionCard5').hasClass('hidden') && 
         $('#testComplete').hasClass('hidden'))  {
            $('#questionCard5').addClass('hidden')
            $('#testComplete').removeClass('hidden')
    }
})

$('.incorrect').on('click', function () {
    $('.incorrect').attr('disabled', true)
    $('#answerCondition').text('That is incorrect')
    score -= 20,
    timer -= 10
})

$('.correct').on('click', function () {
    $('.incorrect').attr('disabled', true)
    $('#answerCondition').text("That is correct!")
})

// setInterval(function)