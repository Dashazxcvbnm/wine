window.document.addEventListener("DOMContentLoaded", (event) => {
    createBannerListener()
    closeBannerListener()
  });

  function createBannerListener() {
    document.querySelector('.center-block__banner').addEventListener('click', openBanner)
  };

  function openBanner() {
    const modalEl = document.querySelector('.modal-window');
    modalEl.style.display = 'flex';
  }

  function closeBannerListener() {
    document.querySelector('.modal-window__button').addEventListener('click', closeBanner)
  };
 
  function closeBanner() {
    const modalEl = document.querySelector('.modal-window');
    modalEl.style.display = 'none';
  }
