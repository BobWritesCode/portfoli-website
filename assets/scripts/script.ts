/* global $ */
import {
  Certificates,
  certificates
} from './certificates.js';

import {
  TechSkills,
  techSkills
} from './techskills.js';

import {
  Portfolio,
  portfolio
} from './portfolio.js';

const certs: Certificates[] = certificates;
const skills: TechSkills[] = techSkills;
const projects: Portfolio[] =  portfolio;


/**
 * Open image preview in center of viewpoint.
 * @param {string} data Received from the DOM
 */
function openPreview(data:string): void {
  $('#image-preview-container').removeClass('d-none').addClass('d-flex');
  const pic = `./assets/imgs/certificates/${data}`;
  const img = $('#image-preview-container').find('img');
  img[0].setAttribute('src', pic);
}

/**
 * Close image preview in center of viewpoint.
 */
function closePreview(): void {
  $('#image-preview-container').removeClass('d-flex').addClass('d-none');
}

function createProjects() {
  console.log('createProjects');

  const container = $('#projects-container');
  projects.forEach(project => {
    const newDivMain = $('<div class="d-flex flex-column-reverse flex-lg-row pt-0 pb-0 mt-5 mb-5"></div>');
    const newDiv1 = $(`<div class='col-12 col-lg-6 d-flex flex-column'></div>`);
    newDiv1.append(`<h3 class="d-none d-lg-block gold mb-3 mt-3 mt-lg-0 pe-0 pe-lg-2 text-center">${project.name}</h3>`);
    const newP = $('<p class="d-flex flex-wrap justify-content-center mt-3 mt-lg-0 mb-3 pe-0 pe-lg-2"></p>');
    project.badges.forEach(badge => {
      newP.append(`<span class="badge mx-1 px-3 my-1 bg-primary">${badge}</span>`);
    });
    newDiv1.append(newP);
    const newDiv2 = $('<div class="d-flex flex-column flex-wrap pe-0 pe-lg-2 justify-content-between flex-fill"></div>');
    newDiv2.append(`<p>${project.description}</p>`);
    const newDiv3 = $('<div class="d-flex flex-row justify-content-center"></div>');
    newDiv3.append(`<a href="${project.repoURL}" target="_blank" class="col-5 col-sm-4 d-inline-block btn-portfolio text-center" aria-label="Opens Gamer's-verse GitHub repository. (Opens in new tab)."> <i class="bi bi-github"></i></a>`);
    newDiv3.append(`<a href="${project.liveURL}" target="_blank" class="col-5 col-sm-4 d-inline-block btn-portfolio text-center" aria-label="Opens Gamer's-verse live site. (Opens in new tab)."><i class="bi bi-globe"></i></a>`);
    newDiv2.append(newDiv3);
    newDiv1.append(newDiv2);
    newDivMain.append(newDiv1);
    const newDiv4 = $('<div ></div>');
    newDiv4.append(`<h3 class="d-block d-lg-none gold mb-3 mt-3 mt-lg-0 text-center">${project.name}</h3>`);
    newDiv4.append(`<img class='img-fluid' src="${project.imageURL}" alt="${project.imageAlt}"
    style="width:100%;">`);
    newDivMain.append(newDiv4);
    container.append(newDivMain);
  });
}


function createSkillBars() {
  const container = $('#skill-bars-container');
  skills.forEach(skill => {
  const newDiv = $(`<div class='animated-progress ${skill.css}'></div>`);
  newDiv.append(`<span data-progress='${skill.dataProgress}' data-text='${skill.dataText}' aria-hidden='true'></span>`);
  container.append(newDiv);
  });
}

function createCertTable () {
  const table = $('#certificate_table');
  certs.forEach( cert => {
    const newTR = $('<tr class="text-light"></tr>');
    newTR.append(`<td>${cert.icon}</td>`);
    newTR.append(`<td class='d-none d-md-table-cell'>${cert.institute}</td>`);
    newTR.append(`<td class='orange'>${cert.certName}</td>`);
    if (cert.certURL) {
      const ele = $(`<td class='text-center'><button class='btn-portfolio'><i
        class='bi bi-file-medical'></i></button></td>`).on('click', function() {openPreview(`${cert.certURL}`);});
      newTR.append(ele);
    } else {
      newTR.append(`<td></td>`);
    }
    table.find('tbody').append(newTR);
  });
  table.addClass('table table-hover table-dark mt-3');
}

/**
 * Activates the reveal effect when scrolling through the page.
 */
function reveal(): void {
  // Section needs to pass the 20% mark from the bottom of the window to show.
  const elementVisible: number = window.innerHeight * 0.8;
  // Get top page element.
  const siteTop: number = (
    document.getElementById('top') as HTMLElement
  ).getBoundingClientRect().top;
  // Get bottom page element.
  const siteBottom: number = (
    document.getElementById('footer') as HTMLElement
  ).getBoundingClientRect().bottom;

  // Check if user at bottom of page.
  if (siteBottom < window.innerHeight + 1) {
    // If user at bottom of page, show all sections
    $.each($('.reveal'), (_, val: HTMLElement): void => {
      val.classList.add('active');
      if (val.getAttribute('id') === 'tech-section') {
        toggleBars('open');
      }
    });
    // Check to see if user at top of page.
  } else if (siteTop > 10) {
    // If at top of page hide all but top section
    $.each($('.reveal'), (_, val: HTMLElement): void  => {

      val.classList.remove('active');
      if (val.getAttribute('id') === 'tech-section') {
        toggleBars('close');
      }
    });
    // If user not at bottom of page.
  } else {
    // As scroll check each element.
    $.each($('.reveal'), (_, val: HTMLElement): void  => {
      if (val.getBoundingClientRect().top < elementVisible && siteTop !== 0) {
        val.classList.add('active');
        if (val.getAttribute('id') === 'tech-section') {
          toggleBars('open');
        }
      } else {
        val.classList.remove('active');
        if (val.getAttribute('id') === 'tech-section') {
          // Tech sections is not currently being shown
          toggleBars('close');
        }
      }
    });
  }

  if (siteTop === 0) {
    $('#scroll_flash')
      .find('h3')
      .delay(2000)
      .fadeIn('slow', () => {
        $('#scroll_flash').removeClass('d-none');
      });
  } else {
    $('#scroll_flash')
      .find('h3')
      .fadeOut('fast', () => {
        $('#scroll_flash').addClass('d-none');
      });
  }
}

/**
* Is progress bar animation currently happening.
* @type {boolean}
*/
let inProgress = false;

/**
* Is progress bar full.
* @type {boolean}
*/
let full = false;

/**
* Skill progress bar animation.
* @type {('open' | 'close')} If to open progress bars or close.
*/
function toggleBars (data: ('open' | 'close')): void {
  if (!full && !inProgress && data === 'open') {
    // Only queue open animation if bar width at 0
    if ($('.animated-progress span').first().width() == 0) {
      inProgress = true;
      $('.animated-progress span').each(function (): void {
        $(this).animate({ width: `${$(this).attr('data-progress')}%` }, 5000, function(){full=true; inProgress = false;});
        const elTxt = $(this).attr('data-text');
        const txt: string = typeof elTxt !== 'string' ? '' : elTxt;
        $(this).text(txt).css('text-align', 'left');
      });
    }
  } else if (full && !inProgress && data === 'close') {
      inProgress = true;
      $('.animated-progress span').each(function (): void {
        $(this).animate({ width: '0%' }, 500, function(){full=false; inProgress = false;});
      });
  }
}

$(window).on('scroll', function() {
  reveal();
});

$(document).ready( function() {
  $('#btnClosePreview').on('click', function(){closePreview();});
  createProjects();
  createCertTable();
  createSkillBars();
  reveal();
  // Checking to see if tech-section has started open
  // if so, then open progress bars
  $.each($('.reveal'), (_, val: HTMLElement): void => {
    if (val.getAttribute('id') === 'tech-section') {
        toggleBars('open');
    }
  });
});
