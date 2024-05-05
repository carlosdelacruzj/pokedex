import { Injectable } from '@nestjs/common';
// import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { firstValueFrom } from 'rxjs'; // Importa firstValueFrom para manejar el Observable
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SeedService {
  // private readonly axios: AxiosInstance;

  constructor(private httpService: HttpService) {
    // this.axios = axios.create({
    //   // Puedes añadir configuraciones adicionales si es necesario
    // });
  }

  async executeSeed() {
    // const { data } = await this.axios.get<PokeResponse>(
    //   'https://pokeapi.co/api/v2/pokemon?limit=650',
    // );
    // data.results.forEach(({ name, url }) => {
    //   console.log(name, url);
    // });
    const observable = this.httpService.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=100',
    );
    const response = await firstValueFrom(observable);
    response.data.results.forEach(({ name, url }) => {
      // console.log({ name, url });
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      console.log({name, no});
    });
    return response.data.results; // Solo devuelve la propiedad 'data' del objeto response
  }
}
