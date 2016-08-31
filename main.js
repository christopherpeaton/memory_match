var first_card = null;
var second_card = null;
var matched = [];
var matches = 0;

$(document).ready(function () {
    $(".card_back").click(function () {
        if (first_card === null) {
            $(this).hide();
            first_card = $(this).siblings().find('img').attr('src');
            console.log('first card clicked', first_card);

        } else {
            $(this).hide();
            second_card = $(this).siblings().find('img').attr('src');
            console.log('second card clicked', second_card);
            if (first_card === second_card) {
                matched.push
                matches += 1;
            } else {
                setTimeout(function(){

                    first_card.siblings().find('.card_back').show();
                    second_card.siblings().find('.card_back').show();
                    clicked.length = 0;
                    first_card = null;
                    second_card = null;
                }, 1500);
            }
        }
    })
});