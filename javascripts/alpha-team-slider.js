(function($) {

  list_size = 0;

  $(document).ready(function(){
    var cursor = 0; 

    list_size = get_list_size();

    team_member_width = $('.alpha-team li').width();

    set_button_visibility(cursor, list_size);

	    $('span[data-slider="left"]').click(function(){
      if($(this).hasClass('active')){
        $('.alpha-team').animate({marginLeft: "+=" + team_member_width +"px"});
        cursor--;
        set_button_visibility(cursor, list_size);
      }
    });

    $('span[data-slider="right"]').click(function(){
      if($(this).hasClass('active')){
        $('.alpha-team').animate({marginLeft: "-=" + team_member_width+ "px"});
        cursor++;
        set_button_visibility(cursor, list_size);
      }
    });
  });

  $(window).resize(function(){
    list_size = get_list_size();
    cursor = 0;
  });

  function get_list_size(){
    frame_width = $('.alpha-team').parent().width();
    items_count = $('.alpha-team li').size();
    item_width = $('.alpha-team li').width();

    return (items_count - parseInt(frame_width/item_width)) + 1;
    // return items_count;
  }

  function set_button_visibility(cursor, list_size){
    $('span[data-slider="left"]').addClass('active');
    $('span[data-slider="right"]').addClass('active')
    if(cursor == 0){
      $('span[data-slider="left"]').removeClass('active');
    }
    if(cursor == (list_size ) ){
      $('span[data-slider="right"]').removeClass('active');
    }
  }


}) (jQuery);

