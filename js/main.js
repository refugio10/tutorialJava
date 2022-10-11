$(document).ready(function () {
  // alert("Listo Jquery");
  $("#error").hide();
  $("div[posicion]").click(function () {
    //alert("click en la tarjeta " + $(this).attr("posicion"));
    var id=$(this).attr("posicion");
    var datos={"idProducto": id};
    console.log(id);
    
    $.ajax({
      url: "detalleProducto.php",
      data: datos,
      type: "POST",
      success: function (id) {
        alert(id);
        location.href="producto.php?id="+id;
      },
    });
  });

  

  $("#frmSesion").submit(function(event){
      event.preventDefault();
    var datos=new FormData($("#frmSesion")[0]);

    $.ajax({
      url: "iniciarSesion.php",
      data: datos,
      type: "POST",
      success: function(msj){
        alert(msj);
         /*  switch(msj){
            case "admin":
              window.location.href="inicioAdmin.php";
              break;
            case "usuario":
              window.location.href="inicioUusuario.php";
              break;
            case "error":
              $("#error").show();
              break;
          } */
      }
    });

  });

});
