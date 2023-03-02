$(function () {
  progressBars();
});

$(window).scroll(function () {
  reveal();
});

/**
 * Activates the reveal effect when scrolling through the page.
 */
function reveal() {
  // Section needs to pass the 20% mark from the bottom of the window to show.
  const elementVisible = window.innerHeight * 0.8;
  // Get top of page element.
  const topOfPage = document.getElementById('top');
  // Get top of site.
  const siteTop = topOfPage.getBoundingClientRect().top;
  $.each($('.reveal'), function (index, value) {
    if (siteTop > 10) {
      // If at top of page hide all but top section
      value.classList.remove('active');
      if (index == '1') {
        toggleBars('close');
      }
    } else if (
      value.getBoundingClientRect().top < elementVisible &&
      siteTop != 0
    ) {
      value.classList.add('active');
      if (index == '1') {
        toggleBars('open');
      }
    } else {
      value.classList.remove('active');
      if (index == '1') {
        toggleBars('close');
      }
    };
    if (siteTop != 0) {
      $('.flash').addClass('d-none')
    }else {
      $('.flash').removeClass('d-none')
    };
  });
}

/**
 * Open image preview in center of viewpoint.
 */
function openPreview(data) {
  $('#image-preview-container').removeClass('d-none').addClass('d-flex');
  let pic = './assets/imgs/certificates/' + data;
  const img = $('#image-preview-container').find('img');
  img[0].setAttribute('src', pic);
}

/**
 * Close image preview in center of viewpoint
 */
function closePreview() {
  $('#image-preview-container').removeClass('d-flex').addClass('d-none');
}

function progressBars() {
  let bool = true;

  this.toggleBars = function (data) {
    if (bool && data == 'open') {
      bool = false;
      $('.animated-progress span').each(function () {
        $(this).animate({ width: $(this).attr('data-progress') + '%' }, 4000);
        $(this).text($(this).attr('data-text')).css('text-align', 'left');
      });
    } else if (!bool && data == 'close') {
      bool = true;
      $('.animated-progress span').each(function () {
        $(this).animate({ width: '0%' }, 1000);
        $(this).text($(this).attr('data-text')).css('text-align', 'left');
      });
    }
  };
}
