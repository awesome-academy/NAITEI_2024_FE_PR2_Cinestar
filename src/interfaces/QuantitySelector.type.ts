export interface QuantitySelectorProps {
    initialQuantity?: number;
    onQuantityChange?: (quantity: number) => void;
    nameProduct: string;
    setDataQuantity: ( nameProduct: string, newQuantity: number ) => void;
    savedData: {[key: string]: any};
}
