import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <section className="w-screen min-h-screen bg-richblack-900">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </section>
  )
}
