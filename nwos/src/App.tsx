function App() {

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

    return (
        <>
            <h1>Musicfun player</h1>
            <ul>
                {tracks.map((track) => {
                    return (
                        <li key={track.id}>
                            <div>{track.title}</div>
                            <audio controls src={track.url}></audio>
                        </li>
                    )
                })}
            </ul>
            {/*<ul>
                <li>
                    <div>Musicfun soundtrack</div>
                    <audio
                        controls
                        src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"
                    ></audio>
                </li>
                <li>
                    <div>Musicfun soundtrack instrumental</div>
                    <audio
                        controls
                        src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3"
                    ></audio>
                </li>
            </ul>*/}
        </>
    )
}

export default App
