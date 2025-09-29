export function App() {

   /* const tracks = [
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
    ]*/

    return (
        <>
            {/* <h1>Musicfun player</h1>
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
            <ul>
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

            <div className="music-player">
                <h4>1. Классы</h4>
                <h1 id="title" className={"player-title"}>
                    Мой музыкальный плеер
                </h1>
                <hr/>

                <h4>2. maxlength</h4>
                <input
                    type="search"
                    id="search"
                    placeholder="Поиск музыки"
                    maxLength={50}
                    className={"form-control"}
                    value="Начните печатать..."
                />
                <hr/>

                <h4>3. rows, cols, maxLength, readonly</h4>
                <textarea
                    placeholder="Оставьте комментарий к треку..."
                    rows={3}
                    cols={40}
                    maxLength={200}
                    className={"form-control"}
                    readOnly
                ></textarea>
                <hr/>

                <h4>4. tabindex</h4>
                <button tabIndex={0}>Click</button>
                <hr/>

                <h4>5. colspan, rowspan</h4>
                <table border={1}>
                    <tbody>
                    <tr>
                        <td colSpan={2}>1</td>
                        <td rowSpan={3}>2</td>
                    </tr>
                    </tbody>
                </table>
                <hr/>

                <h4>6. for</h4>
                <input type="radio" id="repeat-off" name="repeat"/>
                <label htmlFor="repeat-off">Без повтора</label>
                <hr/>
            </div>
        </>
    )
}

