// Iterate through all image wrappers
$('.placeholder').each(function () {
  // Get the wrapper and image elements
  var $wrapper = $(this);
  var img = $wrapper.find('img')[0];

  // Create temp image and set the src
  var tempImg = new Image();
  tempImg.src = img.src;

  // Callback when the image is loaded
  tempImg.onload = function () {
    // Add .loaded class to wrapper
    $wrapper.removeClass('placeholder');
    $wrapper.addClass('placeholder-loaded');
  };
});
