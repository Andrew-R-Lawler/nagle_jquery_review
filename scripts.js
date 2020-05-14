// script load is first event code runs at
console.log('hello world');

// page load is second event code runs at
$('document').ready(onReady)

function onReady(){
    console.log('jQuery is loaded');
    $( '#hello' ).append('welcome to my page');
}

// action/onclick is the third event code will run at
// $( '#button' ).on( 'click', function)