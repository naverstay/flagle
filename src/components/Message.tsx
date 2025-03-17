import {answerName} from "../util/answer";
import {FormattedMessage} from "../context/FormattedMessage";
import {Country} from "../lib/country";

type Props = {
    win: boolean;
    error: any;
    guesses: number;
    practiceMode: boolean;
};

export function Message({win, error, guesses, practiceMode}: Props) {
    let name = answerName;

    if (practiceMode) {
        const answerCountry = JSON.parse(
            localStorage.getItem("practice") as string
        ) as Country;
        name = answerCountry?.properties.NAME;
    }

    if (error) {
        return <p className="autocomplete-message __error">{error}</p>;
    } else if (win) {
        return (
            <p className="autocomplete-message __success">
                <FormattedMessage id="Game7" values={{
                    answer: <a target="_blank" rel="noreferrer"
                               href={"https://en.wikipedia.org/wiki/" + name}>{name}</a>
                }}/>
            </p>
        );
    } else if (guesses === 0) {
        return (
            <p className="autocomplete-message">
                <FormattedMessage id="Game3"/>
            </p>
        );
    } else {
        return <p className="autocomplete-message"/>;
    }
}
