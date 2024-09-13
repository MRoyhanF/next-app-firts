import { NextRequest, NextResponse } from "next/server";
const data = [
    {
        id: 1,
        title: "Nike Pegasus 41 PQ",
        price: 2099000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21981329-648b-4b85-b531-ef66a1d8a261/AIR+ZOOM+PEGASUS+41+PQ.png",
    },
    {
        id: 2,
        title: "Nike Blazer  Low '77 Vintage",
        price: 1199000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b0173204-5c89-40e9-bae6-fc4fbbb67d12/BLAZER+LOW+%2777+VNTG.png",
    },
    {
        id: 3,
        title: "Luka 3 PF Team Bank",
        price: 2099000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cee1421c-5ced-4126-93e3-e73ac88c665e/JORDAN+LUKA+3+TB+PF.png",
    },
    {
        id: 4,
        title: "Air Jordan 1 Low G",
        price: 2149000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f31a5fd-9f59-4331-8bd1-c8fabe073b4e/NIKE+ZOOM+VOMERO+5.png",
    },
    {
        id: 5,
        title: "Air Jordan 1 Low G",
        price: 2149000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f31a5fd-9f59-4331-8bd1-c8fabe073b4e/NIKE+ZOOM+VOMERO+5.png",
    },
];


export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (id) {
        const detailProduct = data.find((product) => product.id === parseInt(id));
        if (!detailProduct) {
            return NextResponse.json({status: 404, message: "Product not found"});
        }
        return NextResponse.json({status: 200, message: "Success", data: detailProduct});
    }

    return NextResponse.json({status: 200, message: "Success", data});   
}