const seats = document.getElementsByClassName('seat-no');
let count = 0;
let price = 0;
for(let seat of seats){
    seat.addEventListener('click', function(event){
        const ticketCount = document.getElementById('ticket-count');
        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = 'white';
        const ticket = parseInt(ticketCount.innerText);
        count = count + 1;

        // set the value of purchased ticket
        ticketCount.innerText = count;
        
        // update the remaining seat no.
        const currentSeatElement = document.getElementById('current-seat');
        const currentSeat = parseInt(currentSeatElement.innerText);
        
        const availableSeat = currentSeat - 1;

        currentSeatElement.innerText = parseInt(availableSeat);
        
        // set seat number, class & price
        const ticketNo = document.getElementById('ticket-no');
        // const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = event.target.innerText;
        ticketNo.appendChild(p);

        const ticketType = document.getElementById('ticket-type');
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        ticketType.appendChild(p2);

        const ticketPrice = document.getElementById('ticket-price');
        const p3 = document.createElement('p');
        p3.innerText = 550;
        ticketPrice.appendChild(p3);

         // set total price
        price = parseInt(ticketPrice.innerText) + price;
        document.getElementById('total-price').innerText = price;

        // set grand total price

        const grandTotal = document.getElementById('grand-total');
        const grandTotalElement = document.createElement('p');
        grandTotalElement.innerText = document.getElementById('total-price').innerText;
        grandTotal.appendChild(grandTotalElement);
        
        grandTotal.innerText = document.getElementById('total-price').innerText;

        if(price > 2200){
            alert('You have already purchased 4 tickets!')
            
        }
    })
    
}

document.getElementById('button').addEventListener('click', function(){
    const inputCoupon = document.getElementById('coupon');
    const couponCode = inputCoupon.value;

    if(couponCode === 'NEW15'){
        discountPrice = price * 0.15;
        const afterDiscountedPrice = price - discountPrice;
        const grandTotalElemnt = document.getElementById('grand-total');
        grandTotalElemnt.innerText = afterDiscountedPrice;  
    }
    else if(couponCode === 'Coupon 20'){
        discountPrice = price * 0.20;
        const afterDiscountedPrice = price - discountPrice;
        const grandTotalElemnt = document.getElementById('grand-total');
        grandTotalElemnt.innerText = afterDiscountedPrice;  
    }
    document.getElementById('coupon-codes').classList.add('hidden');
})

const userName = document.getElementById('name').addEventListener('keyup', function(event){
    const name = event.target.value;
    const successBtn = document.getElementById('success-btn');
    if(name === name){
        successBtn.removeAttribute('disabled');
    }
});
