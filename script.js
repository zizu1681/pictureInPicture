const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream ,pass to video element,then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play();
        }
    } catch(error) {
     //catch error
    }
};

button.addEventListener('click',async () => {
//Disable button
button.disable = true;
//Start Picture in Picture
await videoElement.requestPictureInPicture();
//Reset Button
button.disable = false;
});

//On load
selectMediaStream();