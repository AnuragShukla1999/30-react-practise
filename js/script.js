document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');
    const closeButton = document.getElementById('closeButton');
  
    toggleButton.addEventListener('click', function () {
      sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
    });
  
    closeButton.addEventListener('click', function () {
      sidebar.style.width = '0';
    });
  });