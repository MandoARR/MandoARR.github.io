function digitNumber(digit){
    document.getElementById('display').value += digit;
}


function clearDis(){
    document.getElementById('display').value = '';
}

function result() {
    var display = document.getElementById('display').value;
    var result = eval(display);
    document.getElementById('display').value = result;
  }