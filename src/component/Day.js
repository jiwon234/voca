import { useParams } from "react-router-dom";
import Word from './Word';
import useFetch from "../hooks/useFetch";
import icon_leftArrow from "../icon/icon-arrow-left.png";
import icon_rightArrow from "../icon/icon-arrow-right.png";
import { Link } from "react-router-dom"

//요일별 단어장 페이지
export default function Day() {
    //dummy.words
    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    const previousDay = parseInt(day, 10) - 1;
    const nextDay = parseInt(day, 10) + 1;

    return (
    <>
        <h2 className="no-select">
            <Link to={`/day/${previousDay}`} className="link"><img src={icon_leftArrow} alt="" style={{marginRight: '1em', height:'0.7em'}}/></Link>
                Day {day}   
            <Link to={`/day/${nextDay}`} className="link"><img src={icon_rightArrow} alt="" style={{marginLeft: '1em', height:'0.7em'}}/></Link>
        </h2> 
        {/*해당 요일에 로딩할 단어가 없을 경우*/}
        {words.length === 0 && <span>Loading...</span>}

        <table className="table-auto">
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id} />
                ))}
            </tbody>
        </table>
    </>
    );
};
