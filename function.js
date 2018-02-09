// must have jQuery library included

// same code for all buttons
jQuery(document).ready(function($) {
  // when user clicks button, toggle the "open" class
  jQuery('.lines').click(function(){
    jQuery(this).toggleClass('open');
  });
});