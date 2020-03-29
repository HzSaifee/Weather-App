console.log("Client Side JS File Loaded!")

const weatherFomr = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherFomr.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const location = search.value;

    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error;
            }
            else{
                messageOne.textContent = "In " + data.location + ":";
                messageTwo.textContent = "It will be " + data.forecast;
            }
        })
    })
})
