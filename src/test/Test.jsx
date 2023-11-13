import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";

export default function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

    console.count("Test Rendered")

	return (
		<div className="w-screen h-screen bg-richblack-800 grid place-items-center">
			<div className="w-[300px] p-4 border flex items-center justify-center gap-10 rounded">
				<button
					onClick={() => dispatch(decrement())}
					className="border px-4 py-2 rounded font-bold"
				>
					-
				</button>
				<span>{count}</span>
				<button
					onClick={() => dispatch(increment())}
					className="border px-4 py-2 rounded font-bold"
				>
					+
				</button>
			</div>
		</div>
	);
}
