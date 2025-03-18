import {getPath} from "../util/svg";

type Props = {
    practiceMode: boolean;
    setShowHome: React.Dispatch<React.SetStateAction<boolean>>;
    setShowPopup: React.Dispatch<React.SetStateAction<string>>;
    setPracticeMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({setShowHome, setShowPopup, practiceMode, setPracticeMode}: Props) {
    // Set up practice mode

    console.log('###RENDER### header');

    return (
        <header className="header">
            <div className="container">
                <div className="header-cell">
                    <span className="logo">Flagle</span>
                </div>

                <div className="header-cell">
                    {practiceMode ?
                        <button className="btn btn-blue" onClick={() => setPracticeMode(false)} aria-label="daily">
                            <span dangerouslySetInnerHTML={{__html: getPath("daily")}}/>
                        </button> :
                        <button className="btn btn-blue" onClick={() => setPracticeMode(true)} aria-label="unlimited">
                            <span dangerouslySetInnerHTML={{__html: getPath("unlimited")}}/>
                        </button>
                    }

                    <button className="btn btn-blue" onClick={() => setShowPopup('stats')} aria-label="Statistics">
                        <span dangerouslySetInnerHTML={{__html: getPath("stats")}}/>
                    </button>

                    <button className="btn btn-blue" onClick={() => setShowPopup('settings')} aria-label="Settings">
                        <span dangerouslySetInnerHTML={{__html: getPath("settings")}}/>
                    </button>

                    <button className="btn btn-blue" onClick={() => setShowPopup('help')} aria-label="Help">
                        <span dangerouslySetInnerHTML={{__html: getPath("help")}}/>
                    </button>
                </div>
            </div>
        </header>
    );
}
