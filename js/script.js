$(function(){
  $('.collapse').on('show.bs.collapse', function(){
    $(this).prev().find('.fas').removeClass().addClass('fas fa-minus-circle')
  });

  $('.collapse').on('hide.bs.collapse', function(){
    $(this).prev().find('.fas').removeClass().addClass('fas fa-plus-circle')
  });

});
