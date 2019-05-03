function searchSite() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName('merkez');
  isim = div.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function renkdegistir() {
  document.getElementById("a").style.background="black";
  document.getElementById("b").style.background="black";
  document.getElementById("c").style.background="black";
  document.getElementById("d").style.background="black";
  document.getElementById("aa").style.color="white";
  document.getElementById("ab").style.color="white";
  document.getElementById('ac').innerHTML="Açık tema";
  document.getElementById("ac").style.background="white";
  document.getElementById("ac").style.color="black";
}

function degistir() {
  document.getElementById("a").style.background="#ddd";
  document.getElementById("b").style.background="#ddd";
  document.getElementById("c").style.background="#ddd";
  document.getElementById("d").style.background="#ddd";
  document.getElementById("aa").style.color="black";
  document.getElementById("ab").style.color="black";
  document.getElementById('ac').innerHTML="Koyu tema";
  document.getElementById("ac").style.background="black";
  document.getElementById("ac").style.color="white";
}
