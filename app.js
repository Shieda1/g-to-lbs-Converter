// https://www.omnicalculator.com/conversion/g-to-lbs

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lbsRadio = document.getElementById('lbsRadio');
const gRadio = document.getElementById('gRadio');

let lbs;
let g = v; 

// labels of the inpust
const variable = document.getElementById('variable');

lbsRadio.addEventListener('click', function() {
  variable.textContent = 'g';
  g = v;
  result.textContent = '';
});

gRadio.addEventListener('click', function() {
  variable.textContent = 'lbs';
  lbs = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lbsRadio.checked)
    result.textContent = `lbs = ${computelbs().toFixed(5)}`;

  else if(gRadio.checked)
    result.textContent = `g = ${computeg().toFixed(5)}`;
})

// calculation

function computelbs() {
  return Number(g.value) / 453.6;
}

function computeg() {
  return Number(lbs.value) * 453.6;
}