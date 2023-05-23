



export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <main>
                <div className="bg-[#181818] min-h-screen">{children}</div>
            </main>
        </section>
    )
}
