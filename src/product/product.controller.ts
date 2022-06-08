import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }
    @Get(":id")
    getProduct(@Param("id") id:string){
        return this.productService.getProduct(id);
    }
    @Post("add")
    addNewProduct(@Body() dto:ProductDto){
        return this.productService.addNewProduct(dto);
    }
    @Get("update/:id")
    updateProduct(@Param("id") id:string){
        return this.productService.updateProduct(id);
    }
    @Get("delete/:id")
    deleteProduct(@Param("id") id:string){
        return this.productService.deleteProduct(id);
    }
}
