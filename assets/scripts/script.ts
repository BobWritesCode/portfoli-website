
import {
  Certificates,
  certificates
} from "./certificates.js";
const certs: Certificates[] = certificates

function createCertTable () {
  const table = $('#certificate_table')
  certs.forEach( cert => {
    let newTR = $('<tr class="text-light"></tr>')
    newTR.append(`<td>${cert.icon}</td>`)
    newTR.append(`<td class="d-none d-md-table-cell">${cert.institute}</td>`)
    newTR.append(`<td class="orange">${cert.certName}</td>`)
    if (cert.certURL) {
      let ele = $(`<td class="text-center"><button class="btn-portfolio"><i
        class="bi bi-file-medical"></i></button></td>`).on('click', function() {openPreview(`${cert.certURL}`)})
      newTR.append(ele)
    } else {
      newTR.append(`<td></td>`)
    }
    table.find('tbody').append(newTR)
  })
  table.addClass('table table-hover table-dark mt-3')
}

/**
 * Activates the reveal effect when scrolling through the page.
 */
function reveal(): void {
  // Section needs to pass the 20% mark from the bottom of the window to show.
  const elementVisible: number = window.innerHeight * 0.8;
  // Get top page element.
  const siteTop: number = (
    document.getElementById("top") as HTMLElement
  ).getBoundingClientRect().top;
  // Get bottom page element.
  const siteBottom: number = (
    document.getElementById("footer") as HTMLElement
  ).getBoundingClientRect().bottom;

  // Check if user at bottom of page.
  if (siteBottom < window.innerHeight + 1) {
    // If user at bottom of page, show all sections
    $.each($(".reveal"), (_, val: HTMLElement): void => {
      val.classList.add("active");
      if (val.getAttribute('id') === 'tech-section') {
        toggleBars("open");
      }
    });
    // Check to see if user at top of page.
  } else if (siteTop > 10) {
    // If at top of page hide all but top section
    $.each($(".reveal"), (_, val: HTMLElement): void  => {

      val.classList.remove("active");
      if (val.getAttribute('id') === 'tech-section') {
        toggleBars("close");
      };
    });
    // If user not at bottom of page.
  } else {
    // As scroll check each element.
    $.each($(".reveal"), (_, val: HTMLElement): void  => {
      if (val.getBoundingClientRect().top < elementVisible && siteTop !== 0) {
        val.classList.add("active");
        if (val.getAttribute('id') === 'tech-section') {
          toggleBars("open");
        }
      } else {
        val.classList.remove("active");
        if (val.getAttribute('id') === 'tech-section') {
          // Tech sections is not currently being shown
          toggleBars("close");
        }
      }
    });
  }

  if (siteTop === 0) {
    $("#scroll_flash")
      .find("h3")
      .delay(2000)
      .fadeIn("slow", () => {
        $("#scroll_flash").removeClass("d-none");
      });
  } else {
    $("#scroll_flash")
      .find("h3")
      .fadeOut("fast", () => {
        $("#scroll_flash").addClass("d-none");
      });
  }
}

/**
* Is progress bar animation currently happening.
* @type {boolean}
*/
let inProgress: boolean = false

/**
* Is progress bar full.
* @type {boolean}
*/
let full: boolean = false

/**
* Skill progress bar animation.
* @type {("open" | "close")} If to open progress bars or close.
*/
function toggleBars (data: ("open" | "close")): void {
  if (!full && !inProgress && data === "open") {
    // Only queue open animation if bar width at 0
    if ($(".animated-progress span").first().width() == 0) {
      inProgress = true;
      $(".animated-progress span").each(function (): void {
        $(this).animate({ width: `${$(this).attr("data-progress")}%` }, 5000, function(){full=true; inProgress = false;});
        const elTxt = $(this).attr("data-text");
        const txt: string = typeof elTxt !== "string" ? "" : elTxt;
        $(this).text(txt).css("text-align", "left");
      });
    }
  } else if (full && !inProgress && data === "close") {
      inProgress = true;
      $(".animated-progress span").each(function (): void {
        $(this).animate({ width: "0%" }, 500, function(){full=false; inProgress = false;});
      });
  };
};

/**
 * Open image preview in center of viewpoint.
 * @param {any} data Received from the DOM
 */
function openPreview(data: any): void {
  $("#image-preview-container").removeClass("d-none").addClass("d-flex");
  const pic = `./assets/imgs/certificates/${data}`;
  const img = $("#image-preview-container").find("img");
  img[0].setAttribute("src", pic);
}

/**
 * Close image preview in center of viewpoint.
 */
function closePreview(): void {
  $("#image-preview-container").removeClass("d-flex").addClass("d-none");
}

$(window).on('scroll', function() {
  reveal();
});

$(document).ready( function() {
  $('#btnClosePreview').on('click', function(){closePreview()})
  createCertTable();
  reveal();
  // Checking to see if tech-section has started open
  // if so, then open progress bars
  $.each($(".reveal"), (_, val: HTMLElement): void => {
    if (val.getAttribute('id') === 'tech-section') {
        toggleBars("open");
    };
  });
});
