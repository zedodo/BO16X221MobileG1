function connexionWS(){
$.ajax({
  type: "GET",
  url: "http://bo16x221mobileg1.dx.am/service.php?type=etapeSuivante&params=groupe-1",
  dataType: "script"
}).done(function(msg) {
  $("#DIV").html( msg );
});
}
