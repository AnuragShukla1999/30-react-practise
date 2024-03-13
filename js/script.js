// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('toggleButton');
//     const sidebar = document.getElementById('sidebar');
//     const closeButton = document.getElementById('closeButton');
  
//     toggleButton.addEventListener('click', function () {
//       sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
//     });
  
//     closeButton.addEventListener('click', function () {
//       sidebar.style.width = '0';
//     });
//   });


// const arrayLikeObject = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// const newArray = Array.from(arrayLikeObject);
// console.log(newArray);

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = Array.from(numbers, x => x * 2);
console.log(doubledNumbers);