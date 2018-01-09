function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.drums-btn[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();key.classList.add('playing');
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playDrums() {
  const keys = document.querySelectorAll('.drums-btn');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
}

export { playDrums };
