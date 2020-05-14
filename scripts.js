// script load is first event code runs at
console.log('hello world');

// page load is second event code runs at
$('document').ready(onReady)

function onReady(){
    console.log('jQuery is loaded');
    $( '#hello' ).append('welcome to my page');
    // $( '#hello' ).css('color', 'red')
    $( '#hello' ).addClass( 'blue' );
    $('#submit').on('click', handleSubmit);
    $('.wrapper').on('click', '.xtraBtn', handleClick)
}

// action/onclick is the third event code will run at
// $( '#button' ).on( 'click', function)

function handleSubmit(){
    console.log('button clicked');
    console.log($('#firstName').val());
    $('#firstName').val('');

    console.log(firstName);
    $('#firstName').val('YAY!');
    // setter
    $('.wrapper').append('<button class = "xtraBtn">click me</button>');
}

function handleClick(){
    console.log('click!');
    $(this).remove();
}