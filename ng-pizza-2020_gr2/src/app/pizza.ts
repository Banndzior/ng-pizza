// "id": 1,
// "name": "Margherita",
// "description": "Tomato sauce, mozzarella, and oregano",
// "photoUrl": "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
// "createdAt": "2020-04-25T09:46:20.5329255+00:00",k;

export interface Pizza {
  id?: number;
  name: string;
  description: string;
  photoUrl?: string;
  createdAt?: Date;
  active: boolean;
}

export interface PizzaResponse {
  size: number;
  value: Pizza[];
}
