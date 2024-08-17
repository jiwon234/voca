
import { Link } from "react-router-dom";

export default function QuizList() {
    return (
        <>
        <div className="m-2 mb-4 p-3 rounded-lg shadow-lg text-lg font-bold">퀴즈</div>
            <ul className="grid grid-cols-2 sm:grid-cols-5 gap-4 m-2">
                    <li className="h-24 rounded-lg shadow-lg hover:bg-gray-200 duration-100"> {/*key는 있는게 좋다네*/}
                        <Link to={'/'}
                            className="text-lg flex items-center justify-center h-full w-full">퀴즈1</Link>
                    </li>
                    <li className="h-24 rounded-lg shadow-lg hover:bg-gray-200 duration-100"> {/*key는 있는게 좋다네*/}
                        <Link to={'/'}
                            className="text-lg flex items-center justify-center h-full w-full">퀴즈1</Link>
                    </li>
                    <li className="h-24 rounded-lg shadow-lg hover:bg-gray-200 duration-100"> {/*key는 있는게 좋다네*/}
                        <Link to={'/'}
                            className="text-lg flex items-center justify-center h-full w-full">퀴즈1</Link>
                    </li>
            </ul>
        </>
    );
}
