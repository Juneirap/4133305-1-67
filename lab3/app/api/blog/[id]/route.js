export function GET(request, { params }){
    return Response.json({
        name:"Apisit",
        major:"IT",
        lv:"3",
        id: params.id
    })
}