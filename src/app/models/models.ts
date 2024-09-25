export type formValues = {
    name: string,
        empresa: string,
        email:string,
        phone: string,
        typeEvent:string,
        cantidadPersonas: number,
        date: string,
        message: string,
}


export type Product = {
    img: string,
    title: string,
    description: string,
}

export type ProductList = {
    products: Product[]
}