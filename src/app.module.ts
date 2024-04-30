import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb+srv://admin123:admin123@cluster0.lbhwxwy.mongodb.net/'),
    // MongooseModule.forRoot(process.env.MONGODB_URI),
    PokemonModule,
  ],
})
export class AppModule {}
