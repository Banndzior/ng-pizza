export interface PizzaResponse {
  value: any[];
  size: number;
} 

export interface Pizza {
  id?: number;
  name: string;
  description: string;
  photoUrl?: string;
  active: boolean;

}
