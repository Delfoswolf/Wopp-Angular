export interface Cart {
    items: Array<CartItem>;
}

export interface CartItem {
    product: string;
    urlImage?: string;
    price: number;
    name: string;
    quantity: number;
    id: string; 
}