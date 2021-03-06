// script load is first event code runs at
console.log('hello world');
let people = [];
// page load is second event code runs at
$('document').ready(onReady)
function onReady(){
    console.log('jQuery is loaded');
    $( '#hello' ).append('welcome to my page');
    // $( '#hello' ).css('color', 'red')
    $( '#hello' ).addClass( 'blue' );
    $('#submit').on('click', handleSubmit);
    $('.wrapper').on('click', '.xtraBtn', handleClick);
}

// action/onclick is the third event code will run at
// $( '#button' ).on( 'click', function)

function handleSubmit(){
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let personObject = {
        firstName: firstName,
        lastName: lastName
    }
    console.log('button clicked');
    
    $('#firstName').val('');
    $('#lastName').val('');
    console.log(firstName, lastName);
    people.push(personObject);
    console.log(personObject);
    console.log(people);
    displayPeople(people);
    $('.delete').on('click', deleteItem)
    // setter
    // $('.wrapper').append('<button class = "xtraBtn">click me</button>');
}

function handleClick(){
    console.log('click!');
    $(this).toggleClass('blue');
}

function displayPeople(array){
    console.log('in displayPeople');
    $('#list').empty();
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        $('#list').append(
            `<li>
                ${array[i].firstName} 
                ${array[i].lastName} 
                <button class = 'delete'>Delete</button>
            </li>`
        )
    }
}

function deleteItem() {
    console.log('in deleteItem');
    $(this).parent().remove();
}