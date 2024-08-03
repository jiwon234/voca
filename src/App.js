import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
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
