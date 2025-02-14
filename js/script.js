document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('cookiesAccepted')) {
        showCookieConsent();
    }
});

function showCookieConsent() {
    const consentBanner = document.createElement('div');
    consentBanner.innerHTML = `
        <div style="position: fixed; bottom: 0; width: 100%; background: #000; color: #fff; padding: 10px; text-align: center;">
            This website uses cookies to ensure you get the best experience. 
            <button id="acceptCookies" style="margin-left: 10px;">Accept</button>
        </div>
    `;
    document.body.appendChild(consentBanner);

    document.getElementById('acceptCookies').addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        consentBanner.remove();
    });
}
