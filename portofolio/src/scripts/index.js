const themeToggleBtn = document.getElementById('themeToggleBtn');
const bodyElement = document.body;
themeToggleBtn.addEventListener('click', function() {
    if (bodyElement.classList.contains('light-theme')) {
        bodyElement.classList.replace('light-theme', 'dark-theme');
        themeToggleBtn.textContent = 'Ubah ke Tema Terang';
    } else {
        bodyElement.classList.replace('dark-theme', 'light-theme');
        themeToggleBtn.textContent = 'Ubah ke Tema Gelap';
    }
});
const profilePic = document.getElementById('profil-pic');
  profilePic.addEventListener('click', function() {
    if (profilePic.style.width === "200px") {
      profilePic.style.width = "400px";
  } else {
      profilePic.style.width = "200px";
  }
})

window.onload = function() {
    const skillElements = document.querySelectorAll('.progress-bar');
    skillElements.forEach(function(skill) {
        const width = skill.getAttribute('style').match(/\d+/)[0];
        skill.style.width = "0";
        setTimeout(function() {
            skill.style.width = width + "%";
        }, 500);
    });
};
// Notifikasi ketika mengeklik media sosial
const socialLinks = document.querySelectorAll('.list-group-item a');
socialLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        alert("Anda akan berpindah ke website lain.");
    });
});



