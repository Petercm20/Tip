//calculin panel    


document.getElementById('btn').onclick = function() {
    document.querySelector('span').innerText = 
   (Number(document.getElementById('Paid').value) + 
    Number(document.getElementById('People').value) + 
    Number(document.getElementById('Score').value))* 3;
}
