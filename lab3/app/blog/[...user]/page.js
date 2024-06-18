async function getBlog(){
    const host ="http://127.0.0.1:3000"
    const data = await fetch(host+"/api/blog/1")

    if(!res.ok) throw new Error("Can't fecth")

    return res.json()
}

export default async function Blog({params}){

    const data = await getBlog()

    return (
    <div>
        Blog
        {params.user}
        {data.name}{data.mjor}{data.id}
    </div>
    );
}