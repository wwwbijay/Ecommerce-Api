import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { RolesGuard } from './auth/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ProductsModule } from './modules/products/products.module';
import { ProductCategoryModule } from './modules/product-category/product-category.module';
import { DiscountModule } from './modules/discount/discount.module';
import { OrderDetailsModule } from './modules/order-details/order-details.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';
import { PaymentDetailsModule } from './modules/payment-details/payment-details.module';
import { CartItemModule } from './modules/cart-item/cart-item.module';
import { Product } from './modules/products/entities/product.entity';
import { ProductCategory } from './modules/product-category/entities/product-category.entity';
import { OrderDetail } from './modules/order-details/entities/order-detail.entity';
import { OrderItem } from './modules/order-items/entities/order-item.entity';
import { Discount } from './modules/discount/entities/discount.entity';
import { CartItem } from './modules/cart-item/entities/cart-item.entity';
import { PaymentDetail } from './modules/payment-details/entities/payment-detail.entity';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Product, ProductCategory, OrderDetail, OrderItem, Discount, CartItem, PaymentDetail],
      synchronize: true,
    }),
    ProductsModule,
    ProductCategoryModule,
    DiscountModule,
    OrderDetailsModule,
    OrderItemsModule,
    PaymentDetailsModule,
    CartItemModule,
  ],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // }
  ],
})
export class AppModule { }
