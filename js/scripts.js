var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const toggler = document.getElementById("start");
const togglerAgain = document.getElementById("pause");
const toggleSplash = document.getElementById("splash");
const isHidden = () => toggleSplash.classList.contains("box--hidden");
const audio = document.getElementById("audio");

toggleSplash.addEventListener("transitionend", function() {
  if (isHidden()) {
    toggleSplash.style.display = "none";
  }
});

toggler.addEventListener("click", function() {
  if (isHidden()) {
    toggleSplash.style.removeProperty("display");
    setTimeout(() => toggleSplash.classList.remove("box--hidden"), 0);
    audio.play();
  } else {
    toggleSplash.classList.add("box--hidden");
    audio.pause();
  }
});
/*
togglerAgain.addEventListener("click", function () {
	toggleSplash.classList.add("box--hidden");
	audio.pause();
});
*/
