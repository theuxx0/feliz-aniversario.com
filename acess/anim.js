function verificarAniversario() {
    var dataAniversario = document.getElementById('dataAniversario').value;
    var hoje = new Date();
    var dataAtual = hoje.toISOString().split('T')[0];

    if (dataAniversario == dataAtual) {
        document.getElementById('resultado').textContent = "Parabéns! Você faz aniversário hoje!";
        
       setTimeout(() => {
        // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}, 2000);



} 

    else {
        document.getElementById('resultado').textContent = "Sua data de nascimento não é hoje.";
    }
}
