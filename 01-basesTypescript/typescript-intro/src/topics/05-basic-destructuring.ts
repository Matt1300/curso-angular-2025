interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2020
    }
}
const song = "New Song";
// const { song} = audioPlayer;
const { song: anotherSong, songDuration: duration } = audioPlayer;
const { details: detailAutor } = audioPlayer;
const { author } = detailAutor

console.log(`Song: ${song}`);
console.log(`Song: ${anotherSong}`);
console.log(`Duration: ${duration}`);
console.log(`Author: ${author}`);

const [, , trunks = "Not found"]: string[] = ["Goku", "Vegeta", "Trunks"];
console.log(`Personaje 3: ${trunks}`);
