import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
    
    getAllProducts(){
        return "Get all products";
    }
    getProduct(id){
        return `This is product with id ${id}`;
    }
    addNewProduct(product:ProductDto){
        return `Added new product [${product.id}] name: ${product.name} price: ${product.price}`;
    }
    updateProduct(product){
        return `Updated product ${product}`;
    }
    deleteProduct(id){
        return `Deleted product with id ${id}`;
    }
}
