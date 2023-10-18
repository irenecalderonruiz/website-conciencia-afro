// Cambio de scroll en la página de Ayuda-Únete
    //  Tuve que cambiar color- por bg- 

$(window).scroll(function() {
  
        // selectors
        var $window = $(window),
            $body = $('body'),
            $panel = $('.panel');
        
        var scroll = $window.scrollTop() + ($window.height() / 3);
       
        $panel.each(function () {
          var $this = $(this);
          
          if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                
            // Quitar clases
            $body.removeClass(function (index, css) {
              return (css.match (/(^|\s)bg-\S+/g) || []).join(' ');
            });
            
            // Añadir clases
            $body.addClass('bg-' + $(this).data('color'));
          }
        });    
        
}).scroll();