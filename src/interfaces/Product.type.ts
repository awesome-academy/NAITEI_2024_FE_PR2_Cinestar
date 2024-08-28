interface Product {
    name: string;
    detail: string;
    price: string;
    image: string;
}
  
export interface Category {
    categoty: string;
    item: Product[];
}
  