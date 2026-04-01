export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
                <p className="text-sm text-slate-600">
                    Quick stats and shortcuts for common admin actions.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-medium text-slate-600">Users</div>
                    <div className="mt-2 text-3xl font-semibold tracking-tight">—</div>
                    <div className="mt-2 text-sm text-slate-500">Total registered users</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-medium text-slate-600">Active</div>
                    <div className="mt-2 text-3xl font-semibold tracking-tight">—</div>
                    <div className="mt-2 text-sm text-slate-500">Users active in last 7 days</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-medium text-slate-600">System</div>
                    <div className="mt-2 text-3xl font-semibold tracking-tight">OK</div>
                    <div className="mt-2 text-sm text-slate-500">All services operational</div>
                </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-2">
                        <div>
                            <div className="text-sm font-semibold">Quick actions</div>
                            <div className="mt-1 text-sm text-slate-500">Jump to common tasks.</div>
                        </div>
                    </div>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        <a
                            href="/admin/users"
                            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
                        >
                            Browse users
                        </a>
                        <a
                            href="/admin/users/add"
                            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
                        >
                            Add user
                        </a>
                        <a
                            href="/admin/users/edit"
                            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
                        >
                            Edit user
                        </a>
                        <a
                            href="/admin/users/delete"
                            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
                        >
                            Delete user
                        </a>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold">Recent activity</div>
                    <div className="mt-1 text-sm text-slate-500">Placeholder timeline.</div>
                    <div className="mt-4 space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 size-2 rounded-full bg-slate-900" />
                            <div className="min-w-0">
                                <div className="text-sm font-medium text-slate-800">Admin logged in</div>
                                <div className="text-xs text-slate-500">Just now</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1 size-2 rounded-full bg-slate-300" />
                            <div className="min-w-0">
                                <div className="text-sm font-medium text-slate-800">Viewed users list</div>
                                <div className="text-xs text-slate-500">A moment ago</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1 size-2 rounded-full bg-slate-300" />
                            <div className="min-w-0">
                                <div className="text-sm font-medium text-slate-800">System check passed</div>
                                <div className="text-xs text-slate-500">Today</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
