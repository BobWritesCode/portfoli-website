/* global $ */

/**
 * Activates the reveal effect when scrolling through the page.
 */
function reveal() {
  // Section needs to pass the 20% mark from the bottom of the window to show.
  const elementVisible = window.innerHeight * 0.8;
  // Get top page element.
  const topOfPage = document.getElementById('top');
  // Get bottom page element.
  const footer = document.getElementById('footer');
  // Get top of site.
  const siteTop = topOfPage.getBoundingClientRect().top;
  const siteBottom = footer.getBoundingClientRect().bottom;

  // Check if user at bottom of page.
  if (siteBottom < window.innerHeight + 1) {
    // If user at bottom of page, show all sections
    $.each($('.reveal'), (index, value) => {
      value.classList.add('active');
      if (index === 1) {
        toggleBars('open');
      }
    });
    // Check to see if user at top of page.
  } else if (siteTop > 10) {
    // If at top of page hide all but top section
    $.each($('.reveal'), (index, value) => {
      value.classList.remove('active');
      if (index === 1) {
        toggleBars('close');
      }
    });
    // If user not at bottom of page.
  } else {
    // As scroll check each element.
    $.each($('.reveal'), (index, value) => {
      if (
        value.getBoundingClientRect().top < elementVisible
        && siteTop !== 0
      ) {
        value.classList.add('active');
        if (index === 1) {
          toggleBars('open');
        }
      } else {
        value.classList.remove('active');
        if (index === 1) {
          toggleBars('close');
        }
      }
    });
  }

  if (siteTop === 0) {
    $('#scroll_flash').find('h3').delay(2000).fadeIn('slow', () => {
      $('#scroll_flash').removeClass('d-none');
    });
  } else {
    $('#scroll_flash').find('h3').fadeOut('fast', () => {
      $('#scroll_flash').addClass('d-none');
    });
  }
}

/**
 * Open image preview in center of viewpoint.
 */
// eslint-disable-next-line no-unused-vars
function openPreview(data) {
  $('#image-preview-container').removeClass('d-none').addClass('d-flex');
  const pic = `./assets/imgs/certificates/${data}`;
  const img = $('#image-preview-container').find('img');
  img[0].setAttribute('src', pic);
}

/**
 * Close image preview in center of viewpoint
 */
// eslint-disable-next-line no-unused-vars
function closePreview() {
  $('#image-preview-container').removeClass('d-flex').addClass('d-none');
}

function progressBars() {
  let bool = true;

  this.toggleBars = function (data) {
    if (bool && data === 'open') {
      bool = false;
      $('.animated-progress span').each(function () {
        $(this).animate({ width: `${$(this).attr('data-progress')}%` }, 4000);
        $(this).text($(this).attr('data-text')).css('text-align', 'left');
      });
    } else if (!bool && data === 'close') {
      bool = true;
      $('.animated-progress span').each(function () {
        $(this).animate({ width: '0%' }, 1000);
        $(this).text($(this).attr('data-text')).css('text-align', 'left');
      });
    }
  };
}

$(() => {
  progressBars();
});

$(window).scroll(() => {
  reveal();
});
