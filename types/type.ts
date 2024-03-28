export type Product = {
    id: number;
    title: string;
    industry: string;
    price: number;
    description: string | undefined;
    images: string[];
}

export type Blade = {
    id: number;
    dementions: string;
    material: string;
    alloySteelCode: string;
    idealFor: string;
    hardnessRanges: string;
    productId: number;
    product: Product;
}

export type Machine = {
    id: number;
    machineType: string;
    warranty: number;
    cnc: string;
    size: string;
    productId: number;
    product: Product;
}