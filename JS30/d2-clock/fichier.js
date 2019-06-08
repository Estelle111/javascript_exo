window.onload=function(){

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');
    const allHands = document.querySelectorAll('.hand')

    function setSeconds() {
        const now = new Date;

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        console.log(seconds)

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        if (secondsDegrees === 90) {
            allHands.forEach(hand => (hand.style.transition = 'none'));
        }else {
            allHands.forEach(hand => (hand.style.transition = ''));
        }  
    }
    
    setInterval(setSeconds, 1000);
    
}