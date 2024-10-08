import { useParams } from "react-router-dom";
import Word from './Word';
import useFetch from "../../hooks/useFetch";
import icon_leftArrow from "../../icon/icon-arrow-left.png";
import icon_rightArrow from "../../icon/icon-arrow-right.png";
import { Link } from "react-router-dom"
import { useState } from "react";

//요일별 단어장 페이지
export default function Day() {
    //dummy.words
    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    const previousDay = parseInt(day, 10) - 1;
    const nextDay = parseInt(day, 10) + 1;

    const [isShowAll, setIsShowAll] = useState(false);

    function toggleShowAll() {
        setIsShowAll(!isShowAll);
    }

    // 수행률 계산
    const dayItems = words.filter(item => item.day == day);
    const doneItemsCount = dayItems.filter(item => item.isDone).length;
    const totalItemsCount = dayItems.length;
    const donePercentage = totalItemsCount > 0 ? (doneItemsCount / totalItemsCount) * 100: 0;

    console.log(`Day에서 완료된 항목의 비율: ${donePercentage}%`);

    return (
    <>
    <div className="flex flex-row justify-between">
        <h2 className="m-3 flex flex-wrap items-center">
                <Link to={`/day/${previousDay}`} className="link"><img src={icon_leftArrow} alt="" className="h-4"/></Link>
                    <div className="text-2xl mx-3">Day {day}</div>
                <Link to={`/day/${nextDay}`} className="link"><img src={icon_rightArrow} alt="" className="h-4"/></Link>
        </h2> 
        <button onClick={toggleShowAll} className="m-3 text-sm text-slate-400 underline underline-offset-2">{isShowAll ? "뜻 숨기기" : "뜻 보기"}</button>
    </div>
        {/*해당 요일에 로딩할 단어가 없을 경우*/}
        {words.length === 0 && <span className="text-lg m-3">Loading...</span>}

        {words.length > 0 && (
            <table className="table table-fixed border border-slate-500 border-collapse">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-center td-text">word</th>
                        <th className="text-center td-text">meaning</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="">
                    {words.map(word => (
                        <Word word={word} key={word.id} isShowAll={isShowAll}/>
                    ))}
                </tbody>
            </table>
        )}
    </>
    );
};
