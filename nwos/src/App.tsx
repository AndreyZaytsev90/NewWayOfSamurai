//const tracks = null
import {useState} from "react";

const tracks = [
    {
        id: '1',
        title: "Musicfun soundtrack",
        url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
        id: '2',
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
        //selected: true
    },
    {
        id: '3',
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
    {
        id: '4',
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
]

export function App() {

    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);


    if (tracks === null) {
        return (
            <>
                <h1>Musicfun player</h1>
                <div>Loading...</div>
            </>
        )
    }

    if (tracks.length === 0) {
        return (
            <>
                <h1>Musicfun player</h1>
                <div>No tracks...</div>
            </>
        )
    }


    return (
        <>
            <h1>Musicfun player</h1>
            <button onClick={()=> setSelectedTrackId(null)}>reset state</button>
            <ul>
                {tracks.map((track) => {
                    return (
                        <li key={track.id}>
                            <div onClick={()=> {
                                setSelectedTrackId(track.id)
                            }}>{track.title}</div>
                            <audio className={track.id === selectedTrackId ? 'selected': ''} controls src={track.url}></audio>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

