function tempConverter()
{     let calcius= "";
     calcius = document.getElementById("calcius");
    if(calcius.value==""){
        document.getElementById("fahrenheit").innerHTML =  "Null";
   }
   else{
      let fahrenheit = ((calcius.value) * 9/5) + 32;
      document.getElementById("fahrenheit").innerHTML =  fahrenheit + "F";
    }
    return false;
}
function areaConverterInMarla(){
    let marla="";
     marla = document.getElementById("marla");
    if(marla.value==""){
        document.getElementById("squarfeet").innerHTML =  "Null";
   }
   else{
    let Squarfeet = 272.251 * (marla.value);
    document.getElementById("Squarfeet").innerHTML =  Squarfeet + "Sqrft";
   }
   return false;
}
function areaConverterInYard(){
    let yard = "";
     yard = document.getElementById("yard");
    if(yard.value==""){
        document.getElementById("tosquarfeet").innerHTML =  "Null";
   }
   else{
    let Squarfeet = 9 * (yard.value);
    document.getElementById("tosquarfeet").innerHTML =  Squarfeet + "Sqrft";
}
}