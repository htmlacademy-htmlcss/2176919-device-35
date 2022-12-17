var sliders = document.querySelectorAll('.slider-item');
var buttons = document.querySelectorAll('.slider-pagination-button');

var changingClassInSlider = function(button, slider) {
button.addEventListener('click', function () {
  if (!slider.classList.contains('slider-active')) {
  var activeSlider = document.querySelector('.slider-active');
  activeSlider.classList.remove('slider-active');
  activeSlider.classList.add('no-active');
  slider.classList.add('slider-active');
  slider.classList.remove('no-active');
  var activeButton = document.querySelector('.pagination-active');
  activeButton.classList.remove('pagination-active');
  button.classList.add('pagination-active');
  };
});
};
for (var i = 0; i < buttons.length; i++) {
changingClassInSlider(buttons[i], sliders[i]);
};

var tabs = document.querySelectorAll('.tab-item');
var tabButtons = document.querySelectorAll('.tab-pagination-button');

var changingTab = function(button, tab) {
  button.addEventListener('click', function () {
    if (!tab.classList.contains('tab-active')) {
    var activeTab = document.querySelector('.tab-active');
    activeTab.classList.remove('tab-active');
    activeTab.classList.add('no-active');
    tab.classList.add('tab-active');
    tab.classList.remove('no-active');
    var activeButton = document.querySelector('.tab-pagination-active');
    activeButton.classList.remove('tab-pagination-active');
    button.classList.add('tab-pagination-active');
  };
  });
};
for (var i = 0; i < tabButtons.length; i++) {
changingTab(tabButtons[i], tabs[i]);
};
var buttonDelivery = document.querySelector('.on-order-link');
buttonDelivery.onclick = function() {
document.querySelector('.modal-container').classList.remove('modal-container-close');
};
var buttonClose = document.querySelector('.modal-close-button');
  buttonClose.onclick = function() {
  document.querySelector('.modal-container').classList.add('modal-container-close');
};
