function yazdir(a) {
      var $age = document.getElementById("text").value;

      if(a==""+""){
          document.getElementById("text").value= $age+"+"
      }
      else if (a=='-') {
          document.getElementById("text").value=$age+'-';
      }
      else if (a=="*") {
          document.getElementById("text").value=$age+"*";
      }
      else if (a=="/") {
          document.getElementById("text").value=$age+"/";
      }
      else if (a==",") {
          document.getElementById("text").value=$age+",";
      }else if(a=="="){
          document.getElementById("text").value=$age+"=";
      }
      else {
        document.getElementById("text").value=$age+a;
      }
}

function deleteText(){
    document.getElementById("text").value=" ";
}

var islemler = new Array();
var i=0;

function hesapla(){
    var $agee = document.getElementById("text").value;
    var $age = document.getElementById("text").value=eval(document.getElementById("text").value);
    document.getElementById("text").value=" "+$age;
    islemler[i]=$agee+'='+$age;
    i++;
}

function islemler() {
    var dongu=islemler.length;
    for (var i = 0; i < dongu; i++) {
        document.write("<p>");
              document.write(islemler[i]);
        document.write("</p>");
    }
}
