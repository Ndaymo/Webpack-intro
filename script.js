import key from './config.js' ;
const buttonClick = document.getElementById('changeText');
let clickCount = 0;

buttonClick.addEventListener('click', () => {
  clickCount++;
  const paraG = document.querySelector('p');
  const secretLink = document.getElementById('secretLink');

  switch (clickCount) {
    case 1:
      paraG.innerText = 'Are they?';
      break;
    case 2:
      paraG.innerText = 'They are!';
      break;
    case 3:
      secretLink.style.display = 'block';
      break;
    default:
      alert('You have clicked the button too many times!');
  }
});
console.log("It's running");
