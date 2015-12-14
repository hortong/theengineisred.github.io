(function($) {

  $(document).ready(function(){
    
    $('.capabilities-item').hide();
    $('.capabilities-item:first').show();
    $('.capabilities-navigation li:first-child a').addClass('active');

    $('.capabilities-navigation li a').click(function(e){
      $('.capabilities-navigation li a').removeClass('active');

      var capability = $(this).attr('href');
      $(capability).show().animate({opacity: 1}, 800);
      $(".capabilities-item").not(capability).hide().animate({opacity: 0}, 800);

      $(this).addClass('active');
      e.preventDefault();

    });

    //Start here

    var current_gallery_image = 0;

    //Initialize projects and gallery images
    $('.project-list li:first-child').addClass("active");
    $('.project-list li.active .image-container:first-child').addClass('active').show();

    //Initialize project navigation buttons
    $('.projects-navigation li:first-child a').addClass('active');

    $('.projects-navigation li a').click(function(e){
      $(this).addClass('active');

      var project = $(this).attr('href');
      set_current_project($(project));
      
      e.preventDefault();
    });

    $('.project-list .item-nav li').click(function(){
      $(this).addClass('active');

      var index = $(this).data('project');
      set_current_gallery_image(index);
      
    });
    //End here

    $('.slide-button').click(function(){
      var project_items = $('.project-list li.active .image-container');

      if($(this).hasClass('prev')){
        current_gallery_image--;
      }else{
        current_gallery_image++;
      }

      current_gallery_image = current_gallery_image % project_items.size();
      set_current_gallery_image(current_gallery_image);
    });

    function set_current_gallery_image(slide_num){
      current_gallery_image = 0;
      $('.project-list .item-nav li').removeClass('active');

      if(slide_num == 0){
        $('.information-container').show();
      }else{
        $('.information-container').hide();
      }

      var project_items = $('.project-list li.active .image-container');
      var item = project_items.get(slide_num);

      current_gallery_image = project_items.index(item);

      $('.project-list li.active .image-container').removeClass('active');
      $(item).addClass('active');

      //Set on item nav
      $('.project-list li.active .item-nav li').removeClass('active');
      
      set_active_nav_item(current_gallery_image);
    }

    function set_current_project(project){
      $('.projects-navigation li a').removeClass('active');

      $(".project-list li").removeClass('active');
      $(project).parent().addClass('active');
      $('.project-list article').not(project).find('.information-container').show();
      $(project).find('.slide-container li:first-child').addClass('active');
      set_active_nav_item(0);
    }

    function set_active_nav_item(index){
      var new_active = $('.project-list li.active .item-nav li').get(index);
      $(new_active).addClass('active');
    }

  });

}) (jQuery);
