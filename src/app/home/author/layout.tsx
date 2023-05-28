



export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <main>
                <div className="bg-[#181818] min-h-[calc(100vh-80px)]">{children}</div>
            </main>
        </section>
    )
}
