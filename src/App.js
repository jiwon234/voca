import Header from "./component/Header";
import DayList from "./component/Dictionary/DayList";
import Day from "./component/Dictionary/Day";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateWord from "./component/Dictionary/CreateWord";
import CreateDay from "./component/Dictionary/CreateDay";
import FloatingNav from "./component/FloatingNav";
 
function App() {
  // json-server --watch ./src/db/data.json --port 3001
  return (
    <BrowserRouter>
      <div className="max-w-screen-sm mx-auto no-select">
        <Header />
        <FloatingNav />
        <Routes> {/* 이부분만 url에 따라 바뀝니다. */}
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />} /> 
          {/*emptypage의 작동이 안돼*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
