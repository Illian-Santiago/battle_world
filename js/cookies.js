document.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    acceptCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
        document.body.style.overflow = 'auto'; // Allow scrolling
    });
});
