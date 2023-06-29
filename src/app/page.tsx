"use client";
import Navbar from "@components/Navbar";
import HomeSection from "@components/Home";
import TheCouple from "@components/TheCouple";
import Proposal from "@components/Proposal";
import OrderOfProgram from "@components/OrderOfProgram";
import Details from "@components/Details";
import Gifts from "@components/Gifts";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<HomeSection />
			<TheCouple />
			<Proposal />
			<OrderOfProgram />
			<Details />
			<Gifts />
			<Contact />
			<Footer />
		</>
	);
}
