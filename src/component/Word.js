import React, { useState } from 'react';

export default function Word({ word:w }) {
    const [word, setWord] = useState(w); //w는 불변값. 초기값 설정에만 사용
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    //뜻 열람 - show
    function toggleShow() {
        setIsShow(!isShow);
    }

    //암기한 단어 비활성화 - Done
    function toggleDone() {
        //setIsDone(!isDone);

        //db를 수정해야하는 경우... 
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            }),
        })
        .then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }
        });
    }
    
    //단어 삭제
    function del(){
        if (window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            })
            .then(res => {
                if(res.ok) {
                    setWord({id:0});
                }
            });
        }
    }

    if (word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td onClick={toggleShow}>{word.eng}</td>
            <td onClick={toggleShow}>{isShow && word.kor}</td> {/*setIsShow로 열람*/}
            <td className="">
                {/*<button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>*/}
                <button onClick={del} className="btn_del">x</button>
            </td>
        </tr>
    )
};
