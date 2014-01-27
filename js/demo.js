$(document).ready(function(){
  $('ul.fixed-menu').on('click', 'a', function(e){
     event.preventDefault();
     if (this.hash == "#footer") {
        dest = $(document).height();
     } else if (this.hash == "#top") {
        dest = 0;
     } else {
        var dest = $('a[name='+ this.hash+']').offset().top, loc = $(window).height()*0.3 ;
         console.log('dest      '+ dest);
         if(dest > loc) {
             dest = dest - loc;
         } else {
             dest = 0;
         }
     }
     console.log('Location  '+ loc);
     console.log('Document  '+ $(document).height());
     console.log('Window    '+ $(window).height());
     console.log('final dest      '+ dest);
     console.log('=================================');
     $('html,body').animate({
         scrollTop: dest
     }, 100);
  });
});
