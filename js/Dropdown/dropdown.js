document.addEventListener('DOMContentLoaded', function() {
  var dropdownContainer = document.getElementById('dropdown-container');
  var dropdownMenu = document.getElementById('dropdown-menu');

  dropdownContainer.addEventListener('mouseenter', function() {
    dropdownMenu.style.display = 'block';
  });

  dropdownContainer.addEventListener('mouseleave', function() {
    dropdownMenu.style.display = 'none';
  });
});