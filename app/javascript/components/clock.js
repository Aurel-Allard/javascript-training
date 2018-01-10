function getClock() {
  const secondHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds * 360 / 60) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins * 360 / 60) + 226;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    var hours = now.getHours()
    if (hours > 12) hours = hours - 12;
    console.log(hours);
    const hourDegrees = (hours * 360 / 12) + 226;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);
}

export { getClock };
