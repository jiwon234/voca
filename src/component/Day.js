import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from './Word';

export default function Day() {
    //dummy.words
    const {day} = useParams();
    //const wordList = dummy.words.filter(word => word.day === Number(day));
    const [words, setWords] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:3001/words")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        });
    }, []);

    return (
    <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word => (
                    <Word word={word} key={word.id} />
                ))}
            </tbody>
        </table>
    </>
    );
};
