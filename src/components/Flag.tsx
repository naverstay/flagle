import {useContext, useEffect, useState} from "react";
import {Country} from "../lib/country";
import {ThemeContext} from "../context/ThemeContext";

const territoryData: Country[] = require("../data/territories.json").features;

type Props = {
    guesses: Country[];
    setFlipped: (prev: React.SetStateAction<boolean[][]>) => any;
    flipped: boolean[][];
    practiceMode: boolean;
    win: boolean;
};

export default function Flag({guesses, win, flipped, setFlipped}: Props) {
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
    }, [guesses, win]);

    return (
        <div className={"flag-wrapper"}>
            <div className={'grid'}>
                {flipped.map((row, rowIndex) =>
                    row.map((col, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`cell ${
                                flipped[rowIndex][colIndex] ? 'flipped' : ""
                            }`}
                        >
                            <div style={{
                                backgroundPositionX: `${(colIndex * 100 / (row.length - 1))}%`,
                                backgroundPositionY: `${rowIndex * 100 / (flipped.length - 1)}%`,
                            }} className={'front'}/>
                            <div className={'back'}/>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
