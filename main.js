function para() {
  var array1 = [];
  for (i = 1; i <= 8; i++) {
    array1.push(document.getElementById("w" + i).value);
  }
  document.getElementById("div1").innerHTML = array1.join();
}