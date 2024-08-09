import { Link } from "react-router-dom"


export default function Header() {
    return <div className="no-select my-5 mb-10 m-3 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
            <Link to="/">토익 영단어 (고급)</Link>
        </h1>
        <div className="flex space-x-4">
            <Link to="/create_word" className="btn">
                단어 추가
            </Link>
            <Link to="/create_day" className="btn">
                Day 추가
            </Link>
        </div>
    </div>
}