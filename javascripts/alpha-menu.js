(function($) {

  var lastId; 
  var menuItems;
  var scrollItems;
  var topMenuHeight;
  var projectItems;

  $(document).ready(function (){

    topMenu = $("#alpha-navigation");
    topMenuHeight = topMenu.outerHeight()+15;
    menuItems = topMenu.find("a");

    projectMenu = $(".projects-navigation");
    projectItems = projectMenu.find("a");

    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

	  // sticky Alpha navagation
    $('body #alpha-navigation').stick_in_parent({
      parent: '.page-node-101'
    });

	  // sticky Site sections navagation 
  	// $('body.page-a #site-sections').stick_in_parent({
  	//   parent: '.page-a'
  	// });

  	menuItems.click(function(e){
      var href = $(this).attr("href");

      $('html, body').stop().animate({ 
        scrollTop: $(href).offset().top
      }, 400);
      e.preventDefault();
    });

    //Mimic above functionality, but for projects menu buttons

    projectItems.click(function(e){
      var href = $(this).attr("href");
      $('html, body').stop().animate({ 
        scrollTop: $(href).offset().top
      }, 400);
      e.preventDefault();
    });

  });

  $(window).scroll(function(){
     // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;
     
     // Get id of current scroll item
    var cur = $(scrollItems).map(function(){
      if ($(this).offset().top < fromTop)
      return this;
    });
     // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
     
    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      $(menuItems).removeClass("current");
      $("a[href=#"+id+"]").addClass("current");
     }                   
  });

}) (jQuery);
