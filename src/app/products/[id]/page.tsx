import DetailsPage from "@/Components/Products/DetailsPage";





type PageProps = {
    params: Promise<{ id: string }>;
};
const  ProductsDetails = async ({params}: PageProps) => {
    const {id} = await params
    console.log(id)
 
    


    return (
        <div>
           <DetailsPage id={id}></DetailsPage>
        </div>
    );
};

export default ProductsDetails;