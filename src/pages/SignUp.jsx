import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

export default function SignUp() {
	const [isPasswordVissible, setIsPasswordVissible] = useState(false);
	const [confirmPasswordVissible, setConfirmPasswordVissible] =
		useState(false);
	const [activeAccountType, setActiveAccountType] = useState("Student");

	const { register, handleSubmit, control, formState } = useForm();
	const { errors } = formState;
	// console.log(register)
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<main className="flex flex-1 w-10/12 mt-2 lg:w-3/4">
			<div className="flex items-center flex-1">
				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					className="lg:w-3/4"
				>
					{/* Form text content */}
					<div className="mb-4">
						<h2 className="mb-4 text-2xl font-bold lg:text-3xl">
							Join the millions learning to code with studyNotion
						</h2>
						<p className="text-xs lg:text-base text-richblack-300">
							Build skills for today, tomorrow, and beyond.
						</p>
						<p className="text-xs italic text-blue-100 lg:text-base">
							Education to future-proof your career.
						</p>
					</div>

					{/* Account type button */}
					<div className="flex gap-4 p-1 mb-4 rounded-full select-none w-fit bg-richblack-700">
						<label
							className={`cursor-pointer py-1 px-3 rounded-full text-richblack-200 font-medium ${
								activeAccountType === "Student"
									? "bg-richblack-900 text-white"
									: ""
							}`}
							onClick={() => setActiveAccountType("Student")}
						>
							Student
							<input
								type="radio"
								value={"Student"}
								name="account_type"
								className="appearance-none"
								checked={activeAccountType === "Student"}
								{...register("account_type")}
							/>
						</label>

						<label
							className={`cursor-pointer py-1 px-3 rounded-full text-richblack-200 font-medium ${
								activeAccountType === "Instructor"
									? "bg-richblack-900 text-white"
									: ""
							}`}
							onClick={() => setActiveAccountType("Instructor")}
						>
							Instructor
							<input
								type="radio"
								value={"Instructor"}
								name="account_type"
								className="appearance-none"
								checked={activeAccountType === "Instructor"}
								{...register("account_type")}
							/>
						</label>
					</div>

					{/*Name Field*/}
					<div className="flex flex-col justify-between gap-4 mb-4 lg:flex-row">
						{/*Name Field - First name*/}
						<label className="flex flex-col gap-2">
							<span>First Name</span>
							<input
								type="text"
								id="first_name"
								placeholder="Enter first name"
								className="w-full h-10 px-2 rounded bg-richblack-700"
								required
								{...register("first_name", {
									required: {
										value: true,
										message: "First name is required",
									},
								})}
							/>

							<p className="text-xs text-yellow-25">
								{errors.first_name?.message}
							</p>
						</label>
						{/*Name Field - Last name*/}
						<label className="flex flex-col gap-2">
							<span>
								Last Name{" "}
								<span className="text-richblack-500">
									(Optional)
								</span>
							</span>
							<input
								type="text"
								name="last_name"
								placeholder="Enter last name"
								className="w-full h-10 px-2 rounded bg-richblack-700"
								{...register("last_name")}
							/>
						</label>
					</div>
					{/* Email Field */}
					<label className="flex flex-col gap-2 mb-4">
						<span>Email</span>
						<input
							type="email"
							name="email"
							placeholder="Enter email address"
							className="h-10 px-2 rounded bg-richblack-700"
							{...register("email", {
								required: {
									value: true,
									message: "Email is required",
								},
							})}
						/>
						<p className="text-xs text-yellow-25">
							{errors.email?.message}
						</p>
					</label>
					{/* Password Field*/}
					<div className="flex flex-col gap-4 mb-6 lg:flex-row">
						{/* Password Field - password*/}
						<label className="flex flex-col gap-2 rounded ">
							<span>Create Password</span>
							<div className="flex items-center rounded bg-richblack-700">
								<input
									type={`${
										isPasswordVissible ? "text" : "password"
									}`}
									name="password"
									minLength={6}
									maxLength={16}
									placeholder="Enter Password"
									className="w-full h-10 px-2 bg-transparent outline-none"
									{...register("password", {
										required: {
											value: true,
											message: "Password is required",
										},
									})}
								/>

								<span
									onClick={() =>
										setIsPasswordVissible(
											!isPasswordVissible
										)
									}
									className="mr-2 cursor-pointer"
								>
									{isPasswordVissible ? (
										<FaRegEye />
									) : (
										<FaRegEyeSlash />
									)}
								</span>
							</div>
							<p className="text-xs text-yellow-25">
								{errors.password?.message}
							</p>
						</label>

						{/* Password Field - confirm_password*/}
						<label className="flex flex-col gap-2">
							<span>Confirm Password</span>
							<div className="flex items-center rounded bg-richblack-700">
								<input
									type={`${
										confirmPasswordVissible
											? "text"
											: "password"
									}`}
									minLength={6}
									maxLength={16}
									name="confirm_password"
									placeholder="Confirm Password"
									{...register("confirm_password", {
										required: {
											value: true,
											message:
												"Confirm Password is required",
										},
									})}
									className="w-full h-10 px-2 bg-transparent outline-none"
								/>
								<span
									onClick={() =>
										setConfirmPasswordVissible(
											!confirmPasswordVissible
										)
									}
									className="mr-2 cursor-pointer"
								>
									{confirmPasswordVissible ? (
										<FaRegEye />
									) : (
										<FaRegEyeSlash />
									)}
								</span>
							</div>
							<p className="text-xs text-yellow-25">
								{errors.confirm_password?.message}
							</p>
						</label>
					</div>
					{/* Create account button */}
					<button
						type="submit"
						className="self-center w-full h-10 font-bold border rounded-full select-none border-richblack-900 bg-yellow-25 text-richblack-900"
					>
						Create Account
					</button>
				</form>
				<DevTool control={control} />
			</div>
			<div className="flex-1 hidden border lg:block"></div>
		</main>
	);
}
