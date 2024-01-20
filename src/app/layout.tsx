import { Providers } from "./providers";

export const metadata = {
    title: "AyoAde23",
    description: "Ayomikun Wed Kolade"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
