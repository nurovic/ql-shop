export type ProductType =  {
    _id: string;
    __typename: string;
    productName: string;
    description: string;
    price: number;
    count: number;
    reviews?: any []
}