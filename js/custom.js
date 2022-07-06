$(document).ready(function () {
	//wrap all tables in a div with table-responsive class and make them striped
  $('table').wrap("<div class='table-responsive'></div>");
  $('table').addClass("table-striped");
      
  //make images responsive and make images work with lightbox
  $('.wm-page-content').find('img').each(function() {
    //add lightbox image support
    var src = $( this ).attr('src');
    var lightboxLink = "<a class='fancybox' href='"+src+"'></a>";
    $( this ).wrap(lightboxLink);
    
    $(".fancybox").fancybox();
  });
});