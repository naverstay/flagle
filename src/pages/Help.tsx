import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
// import {FormattedMessage} from "react-intl";
import {FormattedMessage} from "../context/FormattedMessage";
import {getPath} from "../util/svg";

type Props = {
    closeCallback: React.Dispatch<React.SetStateAction<string>>;
};

export default function Help({closeCallback}: Props) {
    // Theme
    const {nightMode} = useContext(ThemeContext).theme;

    return (
        <div className="popup-content">
            <div className="popup-header">
                <button
                    className="popup-close"
                    onClick={() => closeCallback('')}
                >
                    <svg
                        x="0px"
                        y="0px"
                        viewBox="0 0 460.775 460.775"
                        width="12px"
                        className=" dark:fill-gray-300"
                    >
                        <path d={getPath("x")}/>
                    </svg>
                </button>
                <h2 className="popup-title">
                    <FormattedMessage id="helpTitle"/>
                </h2>
            </div>

            <div className="popup-body">
                <p>
                    <FormattedMessage
                        id="help1"
                        values={{
                            // @ts-ignore
                            b: (chunks: string) => (
                                <b className={nightMode ? "text-purple-400" : "text-red-800"}>
                                    {chunks}
                                </b>
                            ),
                        }}
                    />
                </p>
                <p>
                    <FormattedMessage id="help2" values={{
                        // @ts-ignore
                        b: (chunks: string) => <b>{chunks}</b>
                    }}
                    />
                </p>
                <div className="popup-results">
                    <ul className="suggestion-list">
                        <li className="suggestion-list__row __directions">
                            <div className="suggestion-list__name"><span>Sweden</span></div>
                            <div className="suggestion-list__data">~ 1,540<span>km</span></div>
                            <div className="suggestion-list__direction">⬇️</div>
                        </li>
                        <li className="suggestion-list__row __directions">
                            <div className="suggestion-list__name"><span>Hungary</span></div>
                            <div className="suggestion-list__data">&lt;10<span>km</span></div>
                            <div className="suggestion-list__direction">↙️</div>
                        </li>
                        <li className="suggestion-list__row __bingo __directions">
                            <div className="suggestion-list__name"><span>Croatia</span></div>
                            <div className="suggestion-list__data"><span>You Won!</span></div>
                            <div className="suggestion-list__direction">🏆</div>
                        </li>
                    </ul>
                </div>
                <div className="popup-countries">

                    <div className="country-block">
                        <figure className="popup-country">
                            <figcaption className="popup-country__text">First guess</figcaption>
                            <img src="/images/flagle-1.png" alt=""/>
                        </figure>
                    </div>
                    <div className="country-block">
                        <figure className="popup-country">
                            <figcaption className="popup-country__text">Next guesses</figcaption>
                            <img src="/images/flagle-2.png" alt=""/>
                        </figure>
                    </div>
                    <div className="country-block">
                        <figure className="popup-country">
                            <figcaption className="popup-country__text">You won!</figcaption>
                            <img src="/images/flagle-3.png" alt=""/>
                        </figure>
                    </div>
                </div>
                <p className="text-center fw-b">
                    <FormattedMessage id="help3"/>
                </p>
            </div>
        </div>
    );
}
