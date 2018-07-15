document.addEventListener("DOMContentLoaded", function() {
    const modalDiv = document.getElementById('modal');
    const checkButton = document.getElementById('check-button');
    const browserInfo = document.getElementById('browser-navigator');
    let userAgent = navigator.userAgent;
    if(userAgent && browserInfo) {
        browserInfo.innerText = userAgent;
    }
    console.log(checkButton);

    if (checkButton) {
        checkButton.addEventListener('click', function () {
            if (modalDiv) {
                console.log(modalDiv);
                modalDiv.style.removeProperty('display');
            }
        });
    }
    checkServiceWorker();

});

function checkServiceWorker() {
    const label = document.getElementById('service-worker');
    if(label && navigator.serviceWorker !== undefined) {
        label.innerHTML = '<i class="fas fa-check"></i>';
    }
}

