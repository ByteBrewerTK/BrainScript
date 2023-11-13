import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Footer from "./components/shared/Footer";
import SignUp from "./pages/SignUp";

export default function App() {

	return (
		<section className="flex flex-col items-center w-screen min-h-screen bg-richblack-900">
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="*" element={<Error/>} />
				{/* <Route path="/test" element={<Test />} /> */}
			</Routes>
			{/* <Footer/> */}
		</section>
	);
}
