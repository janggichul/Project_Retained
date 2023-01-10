import MainPage from "pages/MainPage"
import Qustionpage from "pages/QustionPage"
import ResultPage from "pages/ResutPage"
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import "./App.css"

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/qustion" element={<Qustionpage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  )
}

export default App
