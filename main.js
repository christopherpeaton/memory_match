var first_card = null;
var second_card = null;
var matched = [];
var matches = 0;
var attempts = 0;
var accuracy;
var games_played = 0;

$(document).ready(function () {
    displayStats();


    $(".card_back").click(function () {
        if (first_card === null) {
            $(this).hide();
            first_card = $(this).siblings().find('img').attr('src');
            console.log('first card clicked', first_card);
            displayStats();
            attempts++;
        } else {
            $(this).hide();
            second_card = $(this).siblings().find('img').attr('src');
            console.log('second card clicked', second_card);
            if (first_card === second_card) {
                var match = {
                    first_card: first_card,
                    second_card: second_card
                };
                matched.push(match);
                matches += 1;
                attempts += 1;
                first_card = null;
                second_card = null;
                displayStats();
            } else {
                setTimeout(function () {
                    $("img[src='" + first_card + "']").parent().siblings().show();
                    $("img[src='" + second_card + "']").parent().siblings().show();
                    first_card = null;
                    second_card = null;
                    attempts += 1;
                    displayStats();
                }, 2000);
            }
        }
        displayStats();
    });

    $("#button").click(function(){
        resetStats();
        games_played ++;
    });

    function displayStats() {
        $(".played_value").html(games_played);
        $(".attempts_value").html(attempts);
        var accurate = Math.round(matches / attempts);
        $(".accuracy_value").html(accurate * 100);
        console.log('accurate :', accurate);
        $(".matches_value").html(matches);
    }

    function resetStats() {
        $('.card_back').show();
        first_card = null;
        second_card = null;
        matched = [];
        accuracy = 0;
        matches = 0;
        attempts = 0;
        displayStats();
    }

});

