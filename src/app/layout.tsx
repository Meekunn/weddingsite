import Navbar from "@components/Navbar";
import { Providers } from "./providers";

export const metadata = {
	title: "AyoAde23",
	description: "With love forever",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
