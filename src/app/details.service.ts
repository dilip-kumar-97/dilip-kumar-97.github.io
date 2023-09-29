import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private details:HttpClient) { }

  getdata(){
    let url = "https://code-berserks.github.io/details.json";
    let data = this.details.get(url);
    return data;
  }
}