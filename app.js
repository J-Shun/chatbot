const price = [
    {
        '10000位': '10000',
        '15000位': '15000',
        '20000位': '20000',
        '25000位': '25000',
        '>25000位': '>25000',
    },
    {
        '10000位': '600',
        '15000位': '900',
        '20000位': '1200',
        '25000位': '1500',
        '>25000位': '2000',
    },
    {
        '10000位': '1600',
        '15000位': '2400',
        '20000位': '3300',
        '25000位': '4200',
        '>25000位': '6000',
    },
]


$(document).ready(function() {
    $('.price-btn').click(function() {
        $('.subscriber-number').text(price[0][$(this).text()]);
        $('.basic-price').text(price[1][$(this).text()]);
        $('.standard-price').text(price[2][$(this).text()]);

        $('.price-btn').removeClass('active');
        $(this).addClass('active');
    })


    $('.question-box').click(function() {
        $('.question-box').removeClass('active');
        $(this).addClass('active');

        $('.question-box:not(.active) .answer').slideUp();
        $('.answer', this).slideDown();
    })
})