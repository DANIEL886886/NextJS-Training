export default function Page() {
	return (
		<div className="min-h-screen flex justify-center items-center">
			<p>Much love to Mihaela 🤍</p>
			{/* Outer container with white background, rounded corners, and shadow */}
			<div
				className="container mx-auto p-6 bg-white rounded-md"
				style={{
					boxShadow:
						"0px 5px 10px rgba(0, 0, 0, 0.15), 0px -3px 6px rgba(0, 0, 0, 0.15), 5px 0px 6px rgba(0, 0, 0, 0.15), -5px 0px 6px rgba(0, 0, 0, 0.15)",
				}}
			>
				{/* Version 2 of shadow all around the box
			<div   className="container mx-auto p-6 bg-white rounded-md shadow-lg shadow-gray-500/65 rounded-lg" > */}

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					<div className="bg-white p-6 shadow-lg rounded-lg h-[350px] w-1/2">
						<p className="text-center text-lg font-medium">
							Panel 1
						</p>
					</div>
					<div className="bg-white p-6 shadow-lg rounded-lg h-96 w-1/2">
						<p className="text-center text-lg font-medium">
							Panel 2
						</p>
					</div>
					<div className="bg-white p-6 shadow-lg rounded-lg h-96 w-1/2">
						<p className="text-center text-lg font-medium">
							Panel 3
						</p>
					</div>
					<div className="bg-white p-6 shadow-lg rounded-lg h-96 w-1/2">
						<p className="text-center text-lg font-medium">
							Panel 4
						</p>
					</div>
					<div className="bg-white p-6 shadow-lg rounded-lg h-96 w-1/2">
						<p className="text-center text-lg font-medium">
							Panel 5
						</p>
					</div>
					<div className="bg-white p-6 shadow-lg rounded-lg h-96 w-1/2">
						<p className="text-center text-lg font-medium">
							Panel 6
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
