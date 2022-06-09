const data = {
    people: {
        '10000位': '10000',
        '15000位': '15000',
        '20000位': '20000',
        '25000位': '25000',
        '>25000位': '>25000',
    },
    price: {
        '10000位': ['600','1600'],
        '15000位': ['900','2400'],
        '20000位': ['1200','3300'],
        '25000位': ['1500','4200'],
        '>25000位': ['2000','6000'],
    }
}

$(document).ready(function() {
    $('.buttons button').click(function() {
        $('.subscriber-number').text(data.people[$(this).text()]);
        $('.basic-price').text(data.price[$(this).text()][0]);
        $('.standard-price').text(data.price[$(this).text()][1]);

        $('.buttons button').removeClass('active');
        $(this).addClass('active');
    })


    $('.question-box').click(function() {
        $('.question-box').not(this).removeClass('active');
        $(this).toggleClass('active');

        $('.answer', this).slideToggle();
        $('.answer').not('.question-box.active .answer').slideUp();
    })
})