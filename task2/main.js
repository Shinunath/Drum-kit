const effect = document.querySelector(".key");
window.addEventListener('keydown', (e)=>{
    console.log(e);
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`key[data-key="${e.keyCode}"]`);
    if(audio){
        audio.play();
        audio.currentTime = 0;
    }

})