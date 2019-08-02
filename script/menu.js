$(".menu-button").on('click', () => {
    var $panel = $('.sticky-menu-dropdown');
    if ($panel.css('display') === "block") {
        $panel.css('display', `none`);
      } else {
        $panel.css('display', 'block')    
      }
})

