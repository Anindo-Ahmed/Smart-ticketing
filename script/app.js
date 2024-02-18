const seats = document.getElementsByClassName('seat-no')
let count = 0;
for(let seat of seats){
    seat.addEventListener('click', function(event){
        const ticketCount = document.getElementById('ticket-count');
        const ticket = parseInt(ticketCount.innerText);
        count = count + 1;

        // set the value of purchased ticket
        ticketCount.innerText = count;
        
        // update the remaining seat no.
        const currentSeatElement = document.getElementById('current-seat');
        const currentSeat = parseInt(currentSeatElement.innerText);
        
        const availableSeat = currentSeat - 1;

        currentSeatElement.innerText = parseInt(availableSeat);
        
    })
    

}