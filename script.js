$(document).ready(function () {
    var x = `<i class="fas fa-times"></i>`;
    var o = `<i class="far fa-circle"></i>`;
    var turn = 1,
        cell_0 = $('.cell-0'),
        cell_1 = $('.cell-1'),
        cell_2 = $('.cell-2'),
        cell_3 = $('.cell-3'),
        cell_4 = $('.cell-4'),
        cell_5 = $('.cell-5'),
        cell_6 = $('.cell-6'),
        cell_7 = $('.cell-7'),
        cell_8 = $('.cell-8'),
        btn = $('button');
    var score = 0;

    $('.cell').on("click", function (e) {
        if ($(this).hasClass('o') || $(this).hasClass('x')) {
            alert('already filled')
        }
        else if (turn === 9) {
            alert('Its a TIE')
            $('.cell').off('click')
        }
        else if (turn % 2 == 0) {
            turn++;
            $(this).text('o')
            $(this).addClass('o')
            if (cell_0.hasClass('o') && cell_1.hasClass('o') && cell_2.hasClass('o') ||
                cell_3.hasClass('o') && cell_4.hasClass('o') && cell_5.hasClass('o') ||
                cell_6.hasClass('o') && cell_7.hasClass('o') && cell_8.hasClass('o') ||
                cell_0.hasClass('o') && cell_3.hasClass('o') && cell_6.hasClass('o') ||
                cell_1.hasClass('o') && cell_4.hasClass('o') && cell_7.hasClass('o') ||
                cell_2.hasClass('o') && cell_5.hasClass('o') && cell_8.hasClass('o') ||
                cell_0.hasClass('o') && cell_4.hasClass('o') && cell_8.hasClass('o') ||
                cell_2.hasClass('o') && cell_4.hasClass('o') && cell_6.hasClass('o')) {
                alert('The Winner is : "O" ')
                $('.cell').off('click')
                score = score + 1;
                winnerO.html(` &nbsp; <span>)O's</span> Win +=${score}`)
            }
        } else if (turn % 2 !== 0) {
            turn++;
            $(this).text('x')
            $(this).addClass('x')
            if (cell_0.hasClass('x') && cell_1.hasClass('x') && cell_2.hasClass('x') ||
                cell_3.hasClass('x') && cell_4.hasClass('x') && cell_5.hasClass('x') ||
                cell_6.hasClass('x') && cell_7.hasClass('x') && cell_8.hasClass('x') ||
                cell_0.hasClass('x') && cell_3.hasClass('x') && cell_6.hasClass('x') ||
                cell_1.hasClass('x') && cell_4.hasClass('x') && cell_7.hasClass('x') ||
                cell_2.hasClass('x') && cell_5.hasClass('x') && cell_8.hasClass('x') ||
                cell_0.hasClass('x') && cell_4.hasClass('x') && cell_8.hasClass('x') ||
                cell_2.hasClass('x') && cell_4.hasClass('x') && cell_6.hasClass('x')) {
                alert('The Winner is : "X" ')
                $('.cell').off('click')
                score = score + 1;
                winnerX.html(`  &nbsp; <span>X's</span> Win=${score}`)
            }
        }

    });
    btn.click(function (e) {
        $('.cell').removeClass('o');
        $('.cell').removeClass('x');
        turn = 1;
        $('.cell').text('');

    });

    const winnerX = $('.score-board>h2').first();
    const winnerO = $('.score-board>h2').last();

});