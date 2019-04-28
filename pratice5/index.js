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


function hesapla(){
    var $agee = document.getElementById("text").value;
    var $age = document.getElementById("text").value=eval(document.getElementById("text").value);
    document.getElementById("text").value=" "+$age;
    var $ag = document.getElementById("islem").value;
    var x = document.getElementById("islem").value= $ag+"\n"+$agee+" = "+$age;
}
