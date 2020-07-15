export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl='https://pspa.com.pl/assets/themes/consultix/images/no-image-found-360x260.png') {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl

    }
}
