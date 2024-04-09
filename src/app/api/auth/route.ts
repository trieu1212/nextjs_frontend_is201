

export async function POST(request: Request) {
    const res = await request.json()
    const accessToken = res.JWTToken.accessToken
    console.log(res)
    if(!accessToken){
        return Response.json({message:'Không có access token'},{
            status:400,

        })
    }
    return Response.json({res},{
        status:200,
        headers:{
            'Set-Cookie': `accessToken=${accessToken}; Path=/; Secure; SameSite=Strict; HttpOnly`
        }
    })
}