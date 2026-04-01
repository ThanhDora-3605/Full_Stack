export const proxy = (request: Request) => {
    const url = new URL(request.url);
    return new Response(
        JSON.stringify({
            method: request.method,
            pathname: url.pathname,
            search: url.search,
        }),
        { status: 200, headers: { "content-type": "application/json; charset=utf-8" } },
    );
};

export const config = {
    matcher: [
        "/admin/:path*",
    ]
}