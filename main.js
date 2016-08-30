
var first_card = null;
var second_card = null;
var matches = 0;

$(document).ready(function(){
    $(".card_front").click(function(){

        console.log("doc.ready first card clicked");
    })

});

if (first_card){
    $(".first_card").addClass('clicked');
    console.log('first card clicked');
} else {
    $(".second_card").addClass('clicked');
    console.log('second card clicked');
        if (first_card === second_card){
            $(".first_card").addClass('match');
            $(".second_card").addClass('match');
            matches += 1;
            console.log('match');
        } else {

        }
}