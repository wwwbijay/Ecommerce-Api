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
      entities: [User],
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
