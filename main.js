const buttons = document.querySelectorAll(`button[data-key]`);

window.addEventListener("keydown", keyboardPlaySound);

buttons.forEach((button) => {
  button.addEventListener("click", buttonPlaySound);
});

function buttonPlaySound(ev) {
  const key = ev.target.dataset.key;
  playSound(key);
}

function keyboardPlaySound(ev) {
  const key = ev.keyCode;
  playSound(key);
}

function playSound(key) {
  const sound = document.querySelector(`audio[data-key="${key}"]`);
  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
  playAnimation(key)
}

function playAnimation(key) {
  const button = document.querySelector(`button[data-key="${key}"]`);
  button.classList.add("btn-active");
  button.addEventListener("animationend", () => {
    button.classList.remove("btn-active");
  });
}
