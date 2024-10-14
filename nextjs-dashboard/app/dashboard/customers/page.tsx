export default function Page() {
	return (
		<div className="min-h-screen flex justify-center items-center">
			{/* Outer container with white background, rounded corners, and shadow */}
			<div
				className="container mx-auto p-6 bg-white rounded-[30px]"
				style={{
					boxShadow:
						"0px 5px 10px rgba(0, 0, 0, 0.15), 0px -3px 6px rgba(0, 0, 0, 0.15), 5px 0px 6px rgba(0, 0, 0, 0.15), -5px 0px 6px rgba(0, 0, 0, 0.15)",
				}}
			>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center">
					<div className="bg-white p-6 shadow-lg rounded-[30px] h-[350px] max-w-[300px] w-full">
						<p className="text-center text-lg font-medium">
							Panel 1
						</p>
					</div>
					<div className="bg-white p-6 shadow-lg rounded-[30px] h-[350px] max-w-[300px] w-full">
						<p className="text-center text-lg font-medium">
							Panel 2
						</p>
					</div>
					<div className="bg-white p-6 shadow-lg rounded-[30px] h-[350px] max-w-[300px] w-full">
						<p className="text-center text-lg font-medium">
							Panel 3
						</p>
					</div>
					<div className="bg-white p-6 shadow-lg rounded-[30px] h-[350px] max-w-[300px] w-full">
						<p className="text-center text-lg font-medium">
							Panel 4
						</p>
					</div>
					<div className="bg-white p-6 shadow-lg rounded-[30px] h-[350px] max-w-[300px] w-full">
						<p className="text-center text-lg font-medium">
							Panel 5
						</p>
					</div>
					<div className="bg-white p-6 shadow-lg rounded-[30px] h-[350px] max-w-[300px] w-full">
						<p className="text-center text-lg font-medium">
							Panel 6
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
