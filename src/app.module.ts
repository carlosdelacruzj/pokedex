import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin123:admin123@cluster0.lbhwxwy.mongodb.net/nest-pokemon',
    ),
    // MongooseModule.forRoot(process.env.MONGODB_URI),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
