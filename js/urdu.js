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
        songname: "urdu1",
        titel: "Aye Dil Tu Bata",
        artist: "Song by_Sahir Ali",
    },
    {
        songname: "urdu2",
        titel: "Aye Musht-eeKhaak",
        artist: "Song by_Shani Arshad",
    },
    {
        songname: "urdu3",
        titel: "Bharaas OSt",
        artist: "Song by_Yashal Shahid",
    },
    {
        songname: "urdu4",
        titel: "Bharosa Pyar Tera",
        artist: "Song by_Sahir Ali",
    },
    {
        songname: "urdu5",
        titel: "Deewangi OST",
        artist: "Song by_Sahir Ali",
    },
    {
        songname: "urdu6",
        titel: "Kaisi Teri Khudgarzi",
        artist: "Song by_Rahat Fateh Ali",
    },
    {
        songname: "urdu7",
        titel: "Khaani",
        artist: "Song by_Sana Javed,Rahat Fateh Ali",
    },
    {
        songname: "urdu8",
        titel: "Koi Dard Na Jane Mera",
        artist: "Song by_Sahir Ali",
    },
    {
        songname: "urdu9",
        titel: "Mere Pass Tum Ho",
        artist: "Song by_Rahat Fateh ALi",
    },
    {
        songname: "urdu10",
        titel: "Muhabbat Tujhe Alvida",
        artist: "Song by_Sahir Ali",
    },
    {
        songname: "urdu11",
        titel: "Raaz-e-Ulfat",
        artist: "Song by_Shahzad Sheikh,Yumna Zaidi",
    },
    {
        songname: "urdu12",
        titel: "Jeena To Hai",
        artist: "Song by_Sahir ALi",
    },
    {
        songname: "urdu13",
        titel: "Saiyan",
        artist: "Song by_Sahir Ali",
    },
    {
        songname: "urdu14",
        titel: "Tum Se Taluq",
        artist: "Song by_Sahir Ali",
    },
    {
        songname: "urdu15",
        titel: "Koi Chand Rakh",
        artist: "Song by_Rahat Fateh Ali",
    },
];


let loadsong = (songs) => {
    titel.textContent = songs.tital;
    artist.textContent = songs.artist;
    audio.src = "urdusongs/"+songs.songname+".mp3";
    image.src = "urduimages/"+songs.songname+".jpg";
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


