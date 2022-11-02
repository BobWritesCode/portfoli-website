$(function() {
  console.log( "ready!" );
}); 

$("#toggle-dropdown").click(openDropMenu);

const topOfPage = document.getElementById("top");

/**
 * Activates the reveal effect when scrolling through the page.
 */
function reveal() {
  let elementVisible = window.innerHeight * 0.80;
  let siteTop = topOfPage.getBoundingClientRect().top;

  $.each( $(".reveal"), function( index, value ){
    (value.getBoundingClientRect().top < elementVisible && siteTop != 0)
      ? value.classList.add("active") 
      : value.classList.remove("active");
  })
}

/**
 * Close drop down menu on small screens.
 */
function closeDropMenu() {
  if ($("#mobile-dropdown").hasClass("open-dropdown")) { 
    $("#mobile-dropdown").removeClass("open-dropdown")
  }
}

/**
 * open drop down menu on small screens.
 */
function openDropMenu() {
  $("#mobile-dropdown").hasClass("open-dropdown") 
    ? $("#mobile-dropdown").removeClass("open-dropdown")
    : $("#mobile-dropdown").addClass("open-dropdown");
}

/**
 * Open image preview in center of viewpoint.
 */
function openPreview(data) {
  $('#image-preview-container').css("display", "flex");
  let pic = "./assets/imgs/certificates/" + data;
  const img = $('#image-preview-container').find('img');
  img[0].setAttribute('src', pic);
}

/**
 * Close image preview in center of viewpoint
 */
function closePreview() {
  $('#image-preview-container').css("display", "none");
}

/**
 * When user scrolls through page.
 */
$(window).scroll(function () {
  reveal();
  closeDropMenu();
});

