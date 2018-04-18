import React from "react";

const Loading = () => (
	<div className="lds-css text-center">
		<div style={{ width: "100%", height: "100%" }} className="lds-ripple">
			<div />
			<div />
		</div>
	</div>
);

export default Loading;
