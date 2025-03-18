import {useContext, useEffect, useState} from "react";
import {GlobeMethods} from "react-globe.gl";
import {Country} from "../lib/country";
import {ThemeContext} from "../context/ThemeContext";

const territoryData: Country[] = require("../data/territories.json").features;

type Props = {
    guesses: Country[];
    setFlipped: (prev: React.SetStateAction<boolean[][]>) => any;
    flipped: boolean[][];
    globeRef: React.MutableRefObject<GlobeMethods>;
    practiceMode: boolean;
    win: boolean;
};

export default function Flag({guesses, globeRef, win, flipped, setFlipped}: Props) {
    // State
    const [places, setPlaces] = useState(guesses);

    // Theme
    const {nightMode = false, prideMode = false, highContrast = false} = useContext(ThemeContext).theme;

    // After each guess
    useEffect(() => {
        // Add territories to guesses to make shapes
        const territories: Country[] = [];
        guesses.forEach((guess) => {
            const foundTerritories = territoryData.filter((territory) => {
                return guess.properties.NAME === territory.properties.SOVEREIGNT;
            });
            if (foundTerritories) territories.push(...foundTerritories);
        });
        setPlaces(guesses.concat(territories));

        // Turn globe to new spot
    }, [guesses, globeRef, win]);

    return (
        <div className={"flag-wrapper" + (win ? ' __win' : '')}>
            <div className={'grid'}>
                {flipped.map((row, rowIndex) =>
                    row.map((col, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`cell ${
                                flipped[rowIndex][colIndex] ? 'flipped' : ""
                            }`}
                            style={{
                                width: `calc(var(--flag-width) / ${row.length})`,
                                height: `calc(var(--flag-height) / ${flipped.length})`,
                            }}
                            onClick={() => {
                                // handleFlip(rowIndex, colIndex)
                            }}
                        >
                            <div style={{
                                backgroundPositionX: `calc(${-colIndex} * var(--flag-width) / ${row.length})`,
                                backgroundPositionY: `calc(${-rowIndex} * var(--flag-height) / ${flipped.length})`,
                            }} className={'front'}/>
                            <div className={'back'}/>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
