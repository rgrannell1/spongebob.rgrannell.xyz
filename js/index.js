
const $input = document.querySelector('#idiot-says');
const $output = document.querySelector('#spongebob-output');

function spongebobify(text) {
  return text.split('').map((char, index) => {
    return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}

function onInput() {
  const value = $input.value;

  if (value.trim() === '') {
    $output.textContent = '';
    return;
  }
  const spongebobText = spongebobify(value);
  console.log(spongebobText);
  $output.innerHTML = spongebobText;
}

$input.addEventListener('keyup', onInput);