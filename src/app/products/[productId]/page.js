
const DynamicPage = async({params,searchParams}) => {
    const search = await searchParams
    console.log(search)
    const id = (await params).productId     // productId is the dynamic folder name
    console.log(id) 
    return (
        <div>
            <h1>Dynamic Page {id}</h1>
        </div>
    );
};

export default DynamicPage;