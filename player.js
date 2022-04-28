window.player = {
  cover: document.querySelector(".card-image"),
  music: document.querySelector(".card-content h5"),
  artist: document.querySelector(".artist"),
  audio: document.querySelector("audio"),
  audioData: audios,
  currentAudio: {},
  currentPlaying: 0,
  start(){
    this.uptade();

    this.audio.onended = () => this.next();
  },
  next(){
    this.currentPlaying ++
    if (this.currentPlaying == this.audioData.length) this.restart();
    this.uptade();
    this.audio.play();
  },
  uptade(){
    this.currentAudio = this.audioData[this.currentPlaying];

    this.cover.style.background = `url(${path(this.currentAudio.cover)})no-repeat center center / cover`;
    this.music.innerText = this.currentAudio.music;
    this.artist.innerText = this.currentAudio.artist
    this.audio.src = path(this.currentAudio.file);
  },
  restart(){
    this.currentPlaying = 0;
    this.uptade();
  }
};
