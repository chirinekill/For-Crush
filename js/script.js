$(document).ready(() => {

    $('.box-second').hide();

    $('.box-third').hide();

    $('.box-fourth').hide();

    $('.ok').click(() => {
        $('.box-first').hide();
        $('.box-second').show();
    });

    const text = 'Vì cậu quá dễ thương đó UwU !!!';

    let temp = '';

    let i = 0;

    $('.no').mouseenter(() => {
        let audio = new Audio('https://cdn.glitch.com/6c2e3208-2d47-4f51-8b23-1bb4c30f0444%2Fduck.mp3?v=1628613969848');
        let x = Math.floor(Math.random() * $(document).width()) / 2.5;
        let y = Math.floor(Math.random() * $(document).height()) / 2.5;
        $('.no').animate({top: y, left: x},  250);
        audio.play();
    });

    $('.no').click(() => {
        let audio = new Audio('https://cdn.glitch.com/6c2e3208-2d47-4f51-8b23-1bb4c30f0444%2Fduck.mp3?v=1628613969848');
        let x = Math.floor(Math.random() * $(document).width()) / 2.5;
        let y = Math.floor(Math.random() * $(document).height()) / 2.5;
        $('.no').animate({top: y, left: x},  250);
        audio.play();
    })

    $('.yes').click(() => {
        let audio = new Audio('https://cdn.glitch.com/6c2e3208-2d47-4f51-8b23-1bb4c30f0444%2Ftick.mp3?v=1628613967639');
        $('.box-second').hide();
        $('.box-third').show();
        audio.play();
    });

    $('.send').click(() => {
        let audio = new Audio('https://cdn.glitch.com/6c2e3208-2d47-4f51-8b23-1bb4c30f0444%2Ftick.mp3?v=1628613967639');
        $('.box-third').hide();
        $('.box-fourth').show();
        audio.play();
    });

    $('.notsend').click(() => {
        $('.box-third').hide();
        $('.box-second').show();
    });

    $('.end').click(() => {
        location.reload();
    });

    $('.reason').keypress(() => {
        temp += text[i];
        $('.reason').val(temp);
        i++;
        if(i == text.length) {
            temp = '';
            i = 0;
        }
    });

    $('.reason').bind('keypress', function(e) {
        e.preventDefault(); 
    });
});