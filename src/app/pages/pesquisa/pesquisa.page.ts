
import { Component, OnInit, NgZone} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';

import { environment } from '../../../environments/environment';



import { Categoria } from '../../model/categoria-model';
import { Marca } from '../../model/marca-model';
import { ResultadoPesquisaPage } from '../modal/resultado-pesquisa/resultado-pesquisa.page';





@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})
export class PesquisaPage implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private geolocation: Geolocation,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.getCategoria();
    this.getMarca();
  }    

    // Variaveis de cateoria
    categorias: Categoria[];
    categoria: Categoria;

    // Variaveis de marca
    marcas: Marca[];
    marca: Marca;

    // variavel de distnacia (1,3,5,10.etc) kl
    distancia;

    public resultadoPesquisa: any;

    // variavel nome do produto pesquisado
    produtoPesquisado;


     // Latitude e Longitude
    latitude: any = 0;
    longitude: any = 0;
    options = {   timeout: 10000,   enableHighAccuracy: true,   maximumAge: 3600  };

    // Usandos no request
    campo = '_embedded';
    baseUrl = environment.serveApi;
    httpOptions = {  headers: new HttpHeaders({ 'Content-Type': 'application/json' } )  };


  /*
  *  Recupera a localização geografica
  */
  async getCurrentCoordinates() {
    await this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

     }).catch((error) => {   console.log('Error getting location', error);   });

  }

  /*
  * Recupera parametros para querystring
  */
  getParameter() {

    let params = new HttpParams();
    

    if (this.categoria != null) {
        params = params.append('idCategoria', this.categoria.id.toString());
    }
  
    if (this.marca != null) {
       params = params.append('idMarca', this.marca.id.toString());
    }

    if (this.produtoPesquisado != null) {
        params = params.append('nomeProduto', this.produtoPesquisado);
    }

    if (this.distancia != null && this.distancia != 0) {
        params = params.append('distanceKM', this.distancia);
        params = params.append('latitude', this.latitude);
        params = params.append('longitude', this.longitude);
    }

  return params;
}



  /*
   *  Realiza a pesquisa
   */
  public async pesquisar() {
    this.resultadoPesquisa = '';
    await this.getCurrentCoordinates();

    const service = this.baseUrl + ':8082/searchapi/search';//'http://18.218.14.149:8082/searchapi/search' //this.baseUrl + '/search';
    const resource = 'produtoSearchResponseResources';
    
    console.log(this.getParameter());
    this.httpClient.get<any[]>(service, {params: this.getParameter()})
      .pipe(
        map(data => data))//[this.campo][resource],
      .subscribe(retorno => {       
        this.resultadoPesquisa = retorno;
        this.openModal();
      },(err) => {
        console.log(err);
        alert(err);
        this.openModal();
      })

      

  }

  /* ========================= */
  /* Recupera todas categorias */
  /* ========================= */
  public getCategoria() {
    const service = this.baseUrl + ':8080/api/categorias';
    const resource = 'categoriaProdutoResources';

    this.httpClient.get<Categoria[]>(service)
      .pipe(
          map(data => data[this.campo][resource]),
      ).subscribe(
          categorias => this.categorias = categorias,
          err=> alert('Erro ao carregar categorias' + err.message)
      );
      
  }

  /* ========================= */
  /* Recupera todas as marcas  */
  /* ========================= */
  public getMarca() {
    const service = this.baseUrl + ':8080/api/marcas';
    const resource = 'marcaProdutoResources';

    this.httpClient.get<Marca[]>(service)
      .pipe(
          map(data => data[this.campo][resource])
      ).subscribe(
          marcas => this.marcas = marcas, err=>
          alert('Erro ao carregar marcas' + err.message)
      );
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: ResultadoPesquisaPage,
      componentProps: { resultadoPesquisa: this.resultadoPesquisa }
    })

    return await modal.present();
  }

}
