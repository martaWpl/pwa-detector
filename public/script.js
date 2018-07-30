document.addEventListener("DOMContentLoaded", function() {
    const modalDiv = document.getElementById('modal');
    const checkButton = document.getElementById('check-button');
    const browserInfo = document.getElementById('browser-navigator');
    const osInfo = document.getElementById('operating-system');
    const osInfoHeader = document.getElementById('osystem');

    let userAgent = navigator.userAgent;
    let operatingSystem = navigator.oscpu;
    pwaCounter = 0;
    iotCounter = 0;
    if(userAgent && browserInfo) {
        browserInfo.innerText = userAgent;
    }
    if(operatingSystem && osInfo) {
        osInfo.innerText = operatingSystem;
        if(osInfoHeader) {
            osInfoHeader.style.setProperty('display','block');
        }
    }

    if (checkButton) {
        checkButton.addEventListener('click', function () {
            if (modalDiv) {
                modalDiv.style.removeProperty('display');
            }
        });
    }
    /*PWA features detecting*/
    checkServiceWorker();
    checkShare();
    checkStorage();
    checkFullscreen();

    /*IOT features detecting*/
    checkBluetooth();
    checkUSB();
    checkRTC();
    checkBeacon();
    checkMedia();
    checkPower();
    checkSpeach();

    setPwaCounter();
    setIOTCounter();
});

function checkServiceWorker() {
    const label = document.getElementById('service-worker');
    if(label && navigator.serviceWorker !== undefined) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.pwaCounter++;
        checkBackgroundSync();
        checkNotification();
        checkPayment();
    }
}
function checkBackgroundSync() {
    const label = document.getElementById('background-sync');
    if(label && 'SyncManager' in window !== false) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.pwaCounter++;
    }
}
function checkNotification() {
    const label = document.getElementById('push-notification');
    if(label && 'PushManager' in window !== false) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.pwaCounter++;
    }
}
function checkStorage() {
    const label = document.getElementById('cache-storage');
    if(label && 'Cache' in window) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.pwaCounter++;
    }
}
function checkPayment() {
    const label = document.getElementById('payments');
    if(label && window.PaymentRequest) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.pwaCounter++;
    }
}
function checkShare() {
    const label = document.getElementById('share');
    if(label && navigator.share) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.pwaCounter++;
    }
}
function checkFullscreen() {
    const label = document.getElementById('fullscreen');
    if(label && (document.body.webkitRequestFullScreen || document.body.requestFullscreen)) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.pwaCounter++;
    }
}

function setPwaCounter() {
    const counterSpan = document.getElementById('pwa-counter');
    if(counterSpan) {
        counterSpan.innerText = pwaCounter;
    }
}

function checkBluetooth() {
    const label = document.getElementById('web-bluetooth');
    if(label && navigator.bluetooth !== undefined) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.iotCounter++;
    }
}
function checkUSB() {
    const label = document.getElementById('web-usb');
    try {
        if(label && USB !== undefined) {
            label.innerHTML = '<i class="fas fa-check"></i>';
            this.iotCounter++;
        }
    }
    catch(error) {
        console.warn(error);
    }
}
function checkRTC() {
    const label = document.getElementById('web-rtc');
    if(label && RTCPeerConnection !== undefined) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.iotCounter++;
    }
}
function checkBeacon() {
    const label = document.getElementById('beacons');
    if(label && navigator.sendBeacon !== undefined) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.iotCounter++;
    }
}
function checkMedia() {
    const label = document.getElementById('video-access');
    if(label && navigator.getUserMedia !== undefined) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.iotCounter++;
    }
}
function checkPower() {
    const label = document.getElementById('power-management');
    if(label && navigator.mozPower !== undefined) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.iotCounter++;
    }
}
function checkSpeach() {
    const label = document.getElementById('voice-rec');
    let speechRecognition = false;
    try {
        if (SpeechRecognition !== undefined) {
            speechRecognition = true;
        }
    } catch (error) {
        console.warn(error);
    }
    try {
        if (webkitSpeechRecognition !== undefined) {
            speechRecognition = true;
        }
    } catch (error) {
        console.warn(error);
    }

    if (label && (speechRecognition === true)) {
        label.innerHTML = '<i class="fas fa-check"></i>';
        this.iotCounter++;
    }
}



function setIOTCounter() {
    const counterSpan = document.getElementById('iot-counter');
    if(counterSpan) {
        counterSpan.innerText = iotCounter;
    }
}
