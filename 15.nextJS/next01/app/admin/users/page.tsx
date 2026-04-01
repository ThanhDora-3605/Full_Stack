export default function UsersPage() {
    return (
        <div className="space-y-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight">Users</h2>
                    <p className="text-sm text-slate-600">Manage and review user accounts.</p>
                </div>
                <a
                    href="/admin/users/add"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
                >
                    Add user
                </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm font-semibold text-slate-800">User list</div>
                    <div className="flex w-full gap-2 sm:w-auto">
                        <input
                            placeholder="Search..."
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-slate-400/40 sm:w-64"
                        />
                        <button className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-white">
                            Filter
                        </button>
                    </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                    <div className="grid grid-cols-12 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                        <div className="col-span-6">Name</div>
                        <div className="col-span-4">Role</div>
                        <div className="col-span-2 text-right">Actions</div>
                    </div>
                    <div className="divide-y divide-slate-200">
                        {[
                            { name: "Jane Doe", role: "Admin" },
                            { name: "John Smith", role: "User" },
                            { name: "Alex Nguyen", role: "User" },
                        ].map((u) => (
                            <div key={u.name} className="grid grid-cols-12 items-center px-3 py-3 text-sm">
                                <div className="col-span-6 font-medium text-slate-900">{u.name}</div>
                                <div className="col-span-4 text-slate-600">{u.role}</div>
                                <div className="col-span-2 flex justify-end gap-2">
                                    <a
                                        href="/admin/users/edit"
                                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href="/admin/users/delete"
                                        className="rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 shadow-sm transition hover:bg-rose-100"
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
