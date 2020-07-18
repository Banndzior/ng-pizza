export interface PizzaResponse {
  value: any[];
}

export interface Pizza {
  id?: number;
  name: string;
  description: string;
  photoUrl?: string;
  active: boolean;
  defaultPizza?: string;
}
