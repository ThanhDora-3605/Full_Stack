import Link from "next/link";

const navItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/users/add", label: "Add user" },
    { href: "/admin/users/edit", label: "Edit user" },
    { href: "/admin/users/delete", label: "Delete user" },
] as const;

export default function AdminUsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-dvh bg-linear-to-br from-slate-50 via-white to-slate-100 text-slate-900">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 p-4 md:flex-row md:gap-6 md:p-6">
                <aside className="w-full md:sticky md:top-6 md:h-[calc(100dvh-3rem)] md:w-64">
                    <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="grid size-10 place-items-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                                    A
                                </div>
                                <div className="leading-tight">
                                    <div className="text-sm font-semibold">Admin</div>
                                    <div className="text-xs text-slate-500">Control panel</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

                        <nav className="mt-4">
                            <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="group flex items-center justify-between gap-2 rounded-xl border border-transparent bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-200 hover:bg-white hover:text-slate-900 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
                                        >
                                            <span>{item.label}</span>
                                            <span className="text-slate-400 transition group-hover:text-slate-500">→</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>

                <main className="min-w-0 flex-1">
                    <header className="mb-4 flex flex-col gap-2 rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur md:mb-6 md:flex-row md:items-center md:justify-between md:px-6 md:py-5">
                        <div>
                            <h1 className="text-lg font-semibold tracking-tight md:text-xl">Dashboard</h1>
                            <p className="text-sm text-slate-600">Manage users and settings from one place.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link
                                href="/"
                                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
                            >
                                Back to site
                            </Link>
                            <Link
                                href="/admin/users"
                                className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
                            >
                                View users
                            </Link>
                        </div>
                    </header>

                    <section className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur md:p-6">
                        {children}
                    </section>
                </main>
            </div>
        </div>
    );
}
