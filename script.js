
document.addEventListener("DOMContentLoaded", () => {
  const bottomNav = document.getElementById('bottomNav');
  const popupLogin = document.getElementById('popupLogin');
  const profileIcon = document.getElementById('profileIcon');

  setTimeout(() => {
    popupLogin.style.display = 'flex';
  }, 5000);

  popupLogin.addEventListener('click', (e) => {
    if (e.target === popupLogin) {
      popupLogin.style.display = 'none';
    }
  });

  profileIcon.addEventListener('click', () => {
    popupLogin.style.display = 'flex';
  });

  document.addEventListener('click', (e) => {
    const screenHeight = window.innerHeight;
    const clickY = e.clientY;

    if (clickY > screenHeight - 150) {
      bottomNav.style.opacity = bottomNav.style.opacity === "0" ? "1" : "0";
    }
  });
});
