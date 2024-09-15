const znx_loading_audio = new Audio("assets/znx_music.mp3");

let znx_loading_music = false;

window.onload = () => {
    znx_loading_audio.volume = 0.2;
    znx_loading_audio.play();
};

window.addEventListener("keydown", function(znx){
    if(znx.code == "Space"){
        if(!znx_loading_music) {
            znx_loading_audio.pause();
            znx_loading_music = true;
        } 
        
        else {
            znx_loading_audio.play();
            znx_loading_music = false;
        }
    }
});