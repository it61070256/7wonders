<<<<<<< HEAD
<<<<<<< HEAD
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
=======
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
>>>>>>> 0d8ddc4539f02cb2e80dda64758c56d7d753a704
  });
=======
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  function myFunction() {
    alert("You clicked the coffee cup!");
  }
>>>>>>> c17366a046ab6c1e1340c0b83ac601334cdd7a4b
