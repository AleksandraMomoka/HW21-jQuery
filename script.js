$('.test').css('color', 'red');

$('h2.test').css('color', 'red');

$('p').next().css('color', 'red');

$('.www').next().css('color', 'red');

$('h2 i').css('color', 'red');

// $('h2 > i').css('color', 'red');

$('h2:not(.test)').css('color', 'red');

$(':header:not(.test)').css('color', 'red');

$(':header + :header').css('color', 'red');

$(':header.test + :header.test').css('color', 'red');