export interface PizzaResponse {
    size: number;
    value: Pizza[];
}

export interface Pizza {
    id?: number;
    name: string;
    description: string;
    photoUrl?: string;
}