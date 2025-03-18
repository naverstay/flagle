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
                <div className="popup-countries">
                    <div className="country-block">
                        <img src="/images/flagle-1.png" alt=""/>
                    </div>
                    <div className="country-block">
                        <img src="/images/flagle-2.png" alt=""/>
                    </div>
                    <div className="country-block">
                        <img src="/images/flagle-3.png" alt=""/>
                    </div>
                </div>
                <p className="text-center fw-b">
                    <FormattedMessage id="help3"/>
                </p>
            </div>
        </div>
    );
}
