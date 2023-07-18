export type ProductType =  {
    _id: string;
    __typename: string;
    productName: string;
    description: string;
    price: any;
    count: any;
    reviews?: any []
}