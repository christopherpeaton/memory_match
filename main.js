var first_card = null;
var second_card = null;
var matches = 0;

$(document).ready(function () {
    $(".card_back").click(function () {
        if (first_card === null) {
            $(this).hide();
            console.log('first card clicked');
        } else {
            if (first_card === second_card) {


                console.log('match');
            } else {

            }
        }
    })
});