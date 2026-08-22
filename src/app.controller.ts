import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('products')
  // getProducts() {
  //   return 'Products';
  // }

  // @Post('products')
  // addProduct() {
  //   return 'Product added'
  // }
}
