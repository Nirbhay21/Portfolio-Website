const overlay = document.getElementById('overlay');
const aboutMePopup = document.getElementById('aboutMePopup');
const aboutMeBtn = document.getElementById('aboutMeBtn');
const closeBtn = document.getElementById('closeBtn');

aboutMeBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    aboutMePopup.classList.add('popup--open');
})

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    aboutMePopup.classList.remove('popup--open');
})