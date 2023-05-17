

export const metadata = {
    title: 'Registation',
    description: 'Generated by create next app',
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <main>
                {children}
            </main>
        </section>
    )
}