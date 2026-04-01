import Nav from "./_components/Nav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-100 via-purple-100 to-pink-100 py-8 px-4">
            <Nav />
            <main className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
                {children}
            </main>
        </div>
    )
}
