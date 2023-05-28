import NavBar from "@/components/Navigation/NavBar"
import Player from "@/components/Player/Player"

export const metadata = {
    title: 'Home',
    description: 'Generated by create next app',
}

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <main>
                <header className="sticky top-0"><NavBar/></header>
                <section>{children}</section>
                <Player />
            </main>
        </section>
    )
}
