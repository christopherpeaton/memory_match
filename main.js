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
                var a = {};
                var match = {
                    first_card: first_card,
                    second_card: second_card
                };
                matched.push(match);
                matches += 1;
                first_card = null;
                second_card = null;
            } else {
                setTimeout(function () {
                    $("img[src='" + first_card + "']").parent().siblings().show();
                    $("img[src='" + second_card + "']").parent().siblings().show();
                    first_card = null;
                    second_card = null;
                }, 1000);
            }
        }
    })
});