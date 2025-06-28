
export default function Loading() {
	return (
		<>
			<div id="preloader">
				<div id="loader" className="loader">
					<div className="loader-container">
						<div className="loader-icon">
							<svg className="rotateme" xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
								<img src="/assets/logo.png" style={{ width: '90px' }} />
							</svg>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
