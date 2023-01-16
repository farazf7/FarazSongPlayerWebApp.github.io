let audio = document.getElementById("controlar");
let play = document.getElementById("play");
let image = document.getElementById("image");
let body = document.body;


let playing = false;

// ==================== playing song function ==============================

let playsong = ()=>{
    playing = true;
    audio.play();
    play.classList.replace("fa-circle-play","fa-circle-pause");
    image.classList.add('anime');
    body.classList.add('anime2')
};

// ==================== pause song function ==============================

let pausesong = ()=>{
    playing = false;
    audio.pause();
    play.classList.replace("fa-circle-pause","fa-circle-play");
    image.classList.remove('anime');
    body.classList.remove('anime2')
};


play.addEventListener('click', ()=>{
    if (playing) {
        pausesong();
    }
    else{
        playsong();
    }
});

// ================== changing ===================

let titel = document.getElementById("tital");
let artist = document.getElementById("artist");
let pre = document.getElementById("pre");
let next = document.getElementById("next");

let songs = [
    {
        songname: "song1",
        titel: "Middle Of The Night",
        artist: "Song by_Elley Duhe",
    },
    {
        songname: "song2",
        titel: "Bilionera(Slowed)",
        artist: "Song by_Otilia Bruma",
    },
    {
        songname: "song3",
        titel: "Hurts So Good",
        artist: "Song by_Astrid S",
    },
    {
        songname: "song4",
        titel: "Under The Influence",
        artist: "Song by_Chris Brown",
    },
    {
        songname: "song5",
        titel: "Nights Changes",
        artist: "Song by_One Direction",
    },
    {
        songname: "song6",
        titel: "DarkSide",
        artist: "Song by_Neoni",
    },
    {
        songname: "song7",
        titel: "Let Me Down Slowly",
        artist: "Song by_Alec Benjamin",
    },
    {
        songname: "song8",
        titel: "7 Rings",
        artist: "Song by_Ariana Grande",
    },
    {
        songname: "song9",
        titel: "Say My Name",
        artist: "Song by_ArrDee",
    },
    {
        songname: "song10",
        titel: "Love Me Like You Do",
        artist: "Song by_Ellie Goulding",
    },
    {
        songname: "song11",
        titel: "Bones",
        artist: "Song by_Imagin Dragons",
    },
    {
        songname: "song12",
        titel: "Louboutin",
        artist: "Song by_Vale Pain",
    },
    {
        songname: "song13",
        titel: "London View",
        artist: "Song by_TPL BM",
    },
    {
        songname: "song14",
        titel: "Ava-Max Alone",
        artist: "Song by_Alan Walker",
    },
    {
        songname: "song15",
        titel: "Girls like You",
        artist: "Song by_Maroon 5",
    },
];


let loadsong = (songs) => {
    titel.textContent = songs.tital;
    artist.textContent = songs.artist;
    audio.src = "songs/"+songs.songname+".mp3";
    image.src = "images/"+songs.songname+".jpg";
}
songsindex = 0;
// loadsong(songs[1]);

let nextsong = () =>{
    songsindex = (songsindex + 1)%songs.length;
    loadsong(songs[songsindex]);
    playsong(songsindex);
}

let presong = () =>{
    songsindex = (songsindex - 1 + songs.length)%songs.length;
    loadsong(songs[songsindex]);
    playsong(songsindex);
}
next.addEventListener('click', nextsong);
pre.addEventListener('click', presong);


