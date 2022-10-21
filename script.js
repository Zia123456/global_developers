const sideNav = document.querySelector('.open');
const hamburgerButton = document.querySelector('.hamburger-icon-container');
const closeButton = document.querySelector('.side-nav-close-btn-container');
const about = document.querySelector('.sid-nav-about');
const program = document.querySelector('.sid-nav-program');
const join = document.querySelector('.sid-nav-join');
const sponser = document.querySelector('.sid-nav-sponser');
const news = document.querySelector('.sid-nav-news');
const body = document.querySelector('body');

function openSideNavbar() {
  sideNav.classList.add('display');
  sideNav.classList.remove('side-nav');
  body.style.overflow = 'hidden';
}

hamburgerButton.addEventListener('click', openSideNavbar);

function closeSideNavbar() {
  sideNav.classList.remove('display');
  sideNav.classList.add('side-nav');
  body.style.overflow = 'auto';
}

closeButton.addEventListener('click', closeSideNavbar);
about.addEventListener('click', closeSideNavbar);
program.addEventListener('click', closeSideNavbar);
join.addEventListener('click', closeSideNavbar);
sponser.addEventListener('click', closeSideNavbar);
news.addEventListener('click', closeSideNavbar);

// js for dropdown button and storing data in array of objects

const tutorDetails = [
  {
    id: 1,
    profileImage: 'images/tutor_01.png',
    fullName: 'Yochai Benkler',
    education:
      'Berkman Professor of Software Engineering studied at Hardward Science School.',
    experience:
      'Benkler has 20 years of teaching experience and, published 20 research papers.',
  },
  {
    id: 2,
    profileImage: 'images/tutor_02.png',
    fullName: 'Jeon Gil-nam',
    education:
      'Berkman Professor of Sofware Engineering studied at MIT Science School.',
    experience:
      'Jeon worked as senior front-End engineer for Google and has 10 years of teaching experience.',
  },
  {
    id: 3,
    profileImage: 'images/tutor_03.png',
    fullName: 'Noh So-young',
    education: 'Noh Studied Computer Science at Seuol National University.',
    experience:
      'Noh worked as a Full-Stack engineer for Metavers and, has 7 years of teaching experience.',
  },
  {
    id: 4,
    profileImage: 'images/tutor_04.png',
    fullName: 'Julia Leda',
    education: 'Julia studied Computer Science at Oxford University.',
    experience:
      'Julia has 15 years of teaching experience at Global Developers.',
  },
  {
    id: 5,
    profileImage: 'images/tutor_05.png',
    fullName: 'Layla Tretikov',
    education: 'Layla studeid Software Engineering at Microvers',
    experience:
      'Layla has 7 years of teaching experience at Global Developers.',
  },
  {
    id: 6,
    profileImage: 'images/tutor_06.png',
    fullName: 'Ryan Merkly',
    education: 'Ryan studied Software Engineering at California University',
    experience: 'Ryan has 12 years of teaching experience at Global Developers',
  },
];

const tutors = document.querySelector('#tutors-profile-container');

for (let i = 1; i <= 2; i += 1) {
  const result = tutorDetails.find((item) => item.id === i);
  tutors.innerHTML += `
<div class="tutor-profile">
  <div class="tutor-profile-img-container">
    <img src="${result.profileImage}" alt="tutor profile image" class="tutor-profile-img">
  </div>
  <div class="tutor-details-container">
    <div class="tutor-name-container">
      <h3 class="tutor-name">${result.fullName}</h3>
    </div>
    <div class="tutor-educations-container">
      <p class="tutor-education">
        ${result.education}
      </p>
    </div>
    <div class="tutor-experience-container">
      <p class="tutor-experience">
      ${result.experience}
      </p>
    </div>
  </div>
</div>
`;
}

// js to see more tutors
const moreTutors = document.querySelector('#more-tutors-profile-container');
const arrowDown = document.querySelector('.down-arrow-container');
const arrowUp = document.querySelector('.hide-arrow-container');
function displayMoreTutors() {
  for (let i = 3; i <= 6; i += 1) {
    const result = tutorDetails.find((item) => item.id === i);
    moreTutors.innerHTML += `
      <div class="tutor-profile">
        <div class="tutor-profile-img-container">
          <img src="${result.profileImage}" alt="tutor profile image" class="tutor-profile-img">
        </div>
        <div class="tutor-details-container">
          <div class="tutor-name-container">
            <h3 class="tutor-name">${result.fullName}</h3>
          </div>
          <div class="tutor-educations-container">
            <p class="tutor-education">
              ${result.education}
            </p>
          </div>
          <div class="tutor-experience-container">
            <p class="tutor-experience">
            ${result.experience}
            </p>
          </div>
        </div>
      </div>
    `;
  }

  moreTutors.classList.add('display-more-tutors');
  arrowDown.classList.remove('down-arrow-container');
  arrowDown.classList.add('hide-arrow-container');
  arrowUp.classList.remove('hide-arrow-container');
}

arrowDown.addEventListener('click', displayMoreTutors);

// js to see less tutors
function seeLessTutors() {
  moreTutors.innerHTML = '';
  arrowUp.classList.add('hide-arrow-container');
  arrowDown.classList.remove('hide-arrow-container');
  arrowDown.classList.add('down-arrow-container');
}

arrowUp.addEventListener('click', seeLessTutors);

for (let i = 3; i <= 6; i += 1) {
  const result = tutorDetails.find((item) => item.id === i);
  moreTutors.innerHTML += `
    <div class="tutor-profile">
      <div class="tutor-profile-img-container">
        <img src="${result.profileImage}" alt="tutor profile image" class="tutor-profile-img">
      </div>
      <div class="tutor-details-container">
        <div class="tutor-name-container">
          <h3 class="tutor-name">${result.fullName}</h3>
        </div>
      <div class="tutor-educations-container">
        <p class="tutor-education">
          ${result.education}
        </p>
      </div>
        <div class="tutor-experience-container">
          <p class="tutor-experience">
            ${result.experience}
          </p>
        </div>
      </div>
    </div>
  `;
}

// js to create add more tutors for pc view
function displayMoreTutorsForPcView() {
  if (window.innerWidth < 1010) {
    moreTutors.innerHTML = '';
    arrowUp.classList.add('hide-arrow-container');
    arrowDown.classList.add('down-arrow-container');
  } else {
    moreTutors.innerHTML = '';
    for (let i = 3; i <= 6; i += 1) {
      const result = tutorDetails.find((item) => item.id === i);
      moreTutors.innerHTML += `
        <div class="tutor-profile">
          <div class="tutor-profile-img-container">
            <img src="${result.profileImage}" alt="tutor profile image" class="tutor-profile-img">
          </div>
          <div class="tutor-details-container">
            <div class="tutor-name-container">
              <h3 class="tutor-name">${result.fullName}</h3>
            </div>
            <div class="tutor-educations-container">
              <p class="tutor-education">
                ${result.education}
              </p>
            </div>
            <div class="tutor-experience-container">
              <p class="tutor-experience">
                ${result.experience}
              </p>
            </div>
          </div>
        </div>
      `;
    }
  }
}

window.addEventListener('resize', displayMoreTutorsForPcView);
