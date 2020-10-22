window.addEventListener("keydown", play_sound);

function play_sound(e){
    console.log(e.keyCode);
    const audio =document.querySelector("audio[data-key='" + e.keyCode +"']");

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}
