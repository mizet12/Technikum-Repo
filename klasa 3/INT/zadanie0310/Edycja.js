const EdycjaLekcji = () => {
    return(
        `<div className="EdycjaLekcji">
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="poleTekstowe">Podaj nazwe</label>
                <input type="text" id="poleTekstowe" name="poleTekstowe"/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasG">Podaj godzine</label>
                <input type="tel" id="czasG" name="czasG"/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasM">Podaj minute</label>
                <input type="tel" id="czasM" name="czasM" />
            </div>
            <button>Ok</button>
            <button>Cancel</button>
        </div>`
    )
}