//set the target date and time
const eventDate = new Date('2024-12-19T23:59:59');

//function to update the countdown
function updateCountdown(){
    const now = new Date();
    const difference = eventDate - now;

    //calculate the time components
    const days = Math.floor(difference / (1000*60*60*24));
    const hours = Math.floor((difference % (1000 *60*60*24))/(1000*60*60));
    const minutes = Math.floor((difference % (1000*60*60)) / (1000*60));
    const seconds =Math.floor((difference % (1000*60)) / (1000));

    //Update the html
    document.getElementById('days').textContent = `${days} Days`;
    document.getElementById('hours').textContent = `${hours} Hrs`;
    document.getElementById('minutes').textContent = `${minutes} Mins`;
    document.getElementById('seconds').textContent = `${seconds} Secs`;

    //stop countdown when event reached
    if (difference <= 0){
        clearInterval(countdownInterval);
        document.getElementById('countdown').textContent = 'The event has started';
    }
}
//upadate the countdown every seconds
const countdownInterval = setInterval(updateCountdown, 1000);
//initialize countdown on page load
updateCountdown()
