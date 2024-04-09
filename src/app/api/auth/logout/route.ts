

export async function POST(request: Request) {
    const res = await request.json()
    const response = new Response(res, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `accessToken=; Max-Age=0; Path=/; HttpOnly`
        }
    });

    return response;
}