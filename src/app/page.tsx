"use client";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/Home";
import HowItStarted from "@/components/HowItStarted";
import Proposal from "@/components/Proposal";

export default function Home() {
	return (
		<>
			<Navbar />
			<HomeSection />
			<HowItStarted />
			<Proposal />
		</>
	);
}
