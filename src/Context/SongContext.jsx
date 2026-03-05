import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const SongContext = createContext();

const SongContextProvider = ({children}) => {

    const songRef = useRef();
    const seekBar = useRef();
    const seekBg = useRef();

    const [index, setIndex] = useState(0)
    const [track, setTrack] = useState(songsData[index])
    const [isPlay, setIsPlay] = useState(false)
    const [Time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalDuration:{
            second:0,
            minute:0
        }
    })

    const play = () => {
        songRef.current.play();
        setIsPlay(true);
    }

    const pause = () => {
        songRef.current.pause();
        setIsPlay(false);
    }

    // 1. Navigation Functions (The Brain)
const nextSong = () => {
  // Functional update use karein taaki hamesha latest index mile
  setIndex((prevIndex) => {
    const nextIdx = (prevIndex + 1) % songsData.length;
    setTrack(songsData[nextIdx]); // Agla track set karein
    return nextIdx;
  });
};

const prevSong = () => {
  setIndex((prevIndex) => {
    // Agar index 0 hai, toh aakhri gaane par bhej dega
    const prevIdx = (prevIndex - 1 + songsData.length) % songsData.length;
    setTrack(songsData[prevIdx]);
    return prevIdx;
  });
};

const playSongById = (id) => {


    setTrack(songsData[id])
    setIsPlay(true)
    play();
}

// 2. Playback Effect (The Action)
// Jab bhi 'track' badlega, ye automatic chalega
useEffect(() => {
  const handleAutoPlay = async () => {
    if (track && songRef.current) {
      try {
        // Browser ko naya source load karne ka time dein
        songRef.current.load(); 
        
        // Play() hamesha ek Promise return karta hai
        await songRef.current.play();
        setIsPlay(true);
      } catch (error) {
        console.error("Playback failed:", error);
        setIsPlay(false);
      }
    }
  };

  handleAutoPlay();
}, [track]); // Dependency array mein 'track' hona zaroori hai


    const seekMusic = (e) => {
        
        if(songRef.current.duration) {
            const newTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * songRef.current.duration;
            songRef.current.currentTime = newTime;
            setIsPlay(true);
        }
        
    }

    useEffect(() => {

        songRef.current.ontimeupdate = () => {
            seekBar.current.style.width = (Math.floor(songRef.current.currentTime / songRef.current.duration * 100))+"%"

            setTime({
                currentTime:{
                    minute:Math.floor(songRef.current.currentTime / 60),
                    second:String(Math.floor(songRef.current.currentTime % 60)).padStart(2, "0")
                },
                totalDuration:{
                    minute:Math.floor(songRef.current.duration/60),
                    second:String(Math.floor(songRef.current.duration%60)).padStart(2, "0")
                }
            })

        }

        songRef.current.onloadedmetadata = () => {
            setTime({
                currentTime: {
                    minute: 0,
                    second: "00"
                },
                totalDuration: {
                    minute: Math.floor(songRef.current.duration / 60),
                    second: String(Math.floor(songRef.current.duration%60)).padStart(2, "0")
                }
            });
        };

        

    }, [play, track, nextSong])


    

    const songData = {
        songRef,
        isPlay, setIsPlay,
        track, setTrack,
        play, pause,
        Time, setTime,
        seekBar, seekBg, seekMusic,
        nextSong, prevSong,
        playSongById
        
    }


    return <SongContext.Provider value={songData}>
        {children}
    </SongContext.Provider>
}

export default SongContextProvider;