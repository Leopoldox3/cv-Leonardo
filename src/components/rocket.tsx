"use client";
import Lottie from "lottie-react";
import rocketAnimation from "@/../public/animations/Businessman_rocket.json"; // importa el archivo

export default function Rocket() {
	return (
		<div className="w-72 h-72 mx-auto -mb-20">
			<Lottie animationData={rocketAnimation} loop autoplay />
		</div>
	);
}
