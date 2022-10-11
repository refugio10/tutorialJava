$(document).ready(function () {

  $.ajax({          
    url:"categorias.php",
    type: "POST",			
    success: function(opcionesCategorias){                        
      $('#categorias').html(opcionesCategorias);
      //alert(opcionesCategorias);
    }      
});
$("#categorias").change(function(){
  var datos={"categoria": $("#categorias").val()};
  //alert($("#categorias").val());
  $.ajax({          
    url:"categorias.php",
    type: "POST",	
    data: datos,		
    success: function(opcionesCategorias){                        
      //$('#categorias').html(opcionesCategorias);
     // alert(opcionesCategorias);
      window.location.href="inicioUsuario.php";
    }      
});

});
  //alert("listo jquery");
  $("#frmActualizarAdm").hide();
  $("#actulizarDatosAdm").click(function(){
    $("#frmActualizarAdm").show();
  });
  // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();
  $("#cuenta").hide();
  $("#error").hide();
  $("#ocultar").hide();
     $('#frmSesion').submit(function (event) {
      event.preventDefault();  // cancela el submit() para que no recargue la página
      var datos = new FormData($("#frmSesion")[0]);
      if($("#usuario").val()=="" || $("#password").val()==""){
        $("#usuario").focus();
      }else{
      //validar el tipo de usuario
      //-----------------------------------------------
      $.ajax({
        url: "iniciarSesion.php",
        data: datos,
        type: "POST",
        contentType: false,
        processData: false,
        success: function (tipo) {

          if(tipo=="administrador"){
            //alert(tipo);
            window.location.href="inicioAdmin.php";
          }
          else if(tipo=="cliente" || tipo=="personal" || tipo=="becado" ){
           // alert(tipo);
            window.location.href="inicioUsuario.php";
          }else{
            $("#error").show();
          }
            
        }
      }); 
    }
    }); 
 

    $("#frmRegistrar").submit(function(event){
      var datos=new FormData($("#frmRegistrar")[0]);
      event.preventDefault();
      $.ajax({
        url: 'registrarU.php',
        data: datos,
        type: 'post',
        contentType: false,
        processData: false,
        success: function(res){
          if(res!=="error"){
            alert(res);
            //$("#frmRegistrar").trigger('reset');
            $("#usuario").focus();
          }
          else{
            alert(res);
          }
        }
      });
    });

    $("#frmRecargar").submit(function(event){
      var datos=new FormData($("#frmRecargar")[0]);
      event.preventDefault();
      if(confirm('¿Recargar Cuenta?')){
        $.ajax({
          url: 'recargas.php',
          data: datos,
          type: 'post',
          contentType: false,
          processData: false,
          success: function(res){
            if(res!="La cuenta no existe"){
              alert("Se reacargo la cuenta");
              window.location.href="ticket.php?idrec="+res;
            }else{
              alert(res);
              $("#Numcuenta").focus();
            }
              
  
          }
        }); 
      }
     
    });

    $("#frmActualizarAdm").submit(function(event){
      var datos=new FormData($("#frmActualizarAdm")[0]);
      event.preventDefault();
      if(confirm('¿Desea actualizar los datos?')) {
        $.ajax({
          url: 'actualizarPerfil.php',
          data: datos,
          type: 'post',
          contentType: false,
          processData: false,
          success: function(res){
              alert(res);
             window.location.href="perfil.php";
             $("#frmActualizarAdm").hide();
          }
        });
      }
    });
    $("#btnBuscar").click(function(){
      //alert($("#cajaBuscar").val());
      
     // if( $("#cajaBuscar").val().length>=3 ){
        var valor=$("#cajaBuscar").val();
      var datos={"cajaBuscar": valor };
      $.ajax({
        url: 'buscarProductos.php',
        data: datos,
        type: 'post',
        
        success: function(res){
          //alert(res);
          window.location.href="inicioUsuario.php";
         //$("#cajaBuscar").val(res);
          
        }
      });
    //}
    });


    $("#frmRegistrarAdmin").submit(function(event){
      var datos=new FormData($("#frmRegistrarAdmin")[0]);
      event.preventDefault();
      $.ajax({
        url: 'registrarU.php',
        data: datos,
        type: 'post',
        contentType: false,
        processData: false,
        success: function(res){
          if(res!=="error"){
            alert(res);
            //$("#frmRegistrar").trigger('reset');
            $("#usuarioA").focus();
          }
          else{
            alert(res);
          }
        }
      });
    });
    $(".btnListo").click(function(){
     // alert($(this).val());
     var valor=$(this).val();
      var datos={"pedidolisto": valor};
     if(confirm('¿Ya está listo?')){
      $.ajax({
        url: 'pedido.php',
        data: datos,
        type: 'post',
        success: function(res){
            alert(res);
            window.location.href="pedidosPorHacer.php";
          
        }
      });
     }
      
    });


    $("#btnBuscarCliente").click(function(){
      // alert($(this).val());
      var valor=$("#buscarCliente").val();
       var datos={"cajaBuscarCliente": valor};
      alert(datos);
       /* $.ajax({
         url: 'buscarCliente.php',
         data: datos,
         type: 'post',
         success: function(res){
             alert(res);
             window.location.href="pedidosPorHacer.php";
           
         }
       }); */
       
     });
    
    
    
   
});
  