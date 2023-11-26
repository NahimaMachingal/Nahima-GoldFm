


document.addEventListener('DOMContentLoaded', function () {
  const enlargeableImage = document.getElementById('enlargeableImage');
  enlargeableImage.addEventListener('mouseover', function () {
    enlargeableImage.style.transform = 'scale(1.2)';
  });


  enlargeableImage.addEventListener('mouseout', function () {
    enlargeableImage.style.transform = 'scale(1)';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var myButton = document.getElementById('colorChangeElement');

  myButton.addEventListener('click', function () {
    alert('Message Sent');
  });
});