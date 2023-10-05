$(document).ready(function (){

    // Cierre Pop-Up Newsletter
	$("#btnCierre").click(function(e) {
		e.preventDefault();
		$("#ModalNewsletter").hide();  
	});

    // Abrir Pop-Up Newsletter
	$("#OpenModalNewsletter").click(function(e) {
		e.preventDefault();
		$("#ModalNewsletter").show();  
	});

    // Abrir Menu
    var cont_menu = 0;
	$("#btn_menu").click(function() {
		if (cont_menu == 0) {
			// Efecto abrir
			$("#menu-pop-up").fadeIn();
			$("#bar1").addClass('bar1');
			$("#bar2").addClass('bar2');
			$("#bar_middle").hide();
			cont_menu = 1;
		}else{
			// Cerrar menu
			$("#menu-pop-up").fadeOut();
			$("#bar1").removeClass('bar1');
			$("#bar2").removeClass('bar2');
			setTimeout(() => {
				$("#bar_middle").show();
			}, 80);
			cont_menu = 0;
		}
	});

    // Elimina el scroll vertical al abrir el menú hamburguesa 
    $("#menu-pop-up").mouseenter(function() {
        $("body").css("overflow-y", "hidden");
    });

    $("#menu-pop-up").mouseleave(function() {
        $("body").css("overflow-y", "visible");
    });

    // Cambio de bg cuando clic en item de menu
        // Aparecer fondos
    $("#item-1").mouseenter(function() {
        $(".menu-pop-up").addClass('bg-img-1');
    });
    $("#item-2").mouseenter(function() {
        $(".menu-pop-up").addClass('bg-img-2');
    });
    $("#item-3").mouseenter(function() {
        $(".menu-pop-up").addClass('bg-img-3');
    });
    $("#item-4").mouseenter(function() {
        $(".menu-pop-up").addClass('bg-img-4');
    });

        // Quitar fondos 
    $("#item-1").mouseleave(function() {
        $(".menu-pop-up").removeClass('bg-img-1');
    });
    $("#item-2").mouseleave(function() {
        $(".menu-pop-up").removeClass('bg-img-2');
    });
    $("#item-3").mouseleave(function() {
        $(".menu-pop-up").removeClass('bg-img-3');
    });
    $("#item-4").mouseleave(function() {
        $(".menu-pop-up").removeClass('bg-img-4');
    });

        
    
});

      
