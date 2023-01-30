import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  constructor(private router: Router, private http: HttpClient) {}
  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('.', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }
  logAdmin({ username, password }: any): Observable<any> {
   
    return this.http.post('https://apt.mg/mical-garage/admin/login', { username, password });
  }

  getAdmin(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/');
  }

  getAllCar(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/car');
  }
  
  getAllCarReception(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/car/reception');
  }
  getAllCarReceptionAll(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/car/reception/all');
  }

  getCarOut(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/car/sortie');
  }

  getAllFacture(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/facture');
  }


  getFactureTF(valeur: any): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/facture/'+ valeur);
  }


  getOneCar(id: any): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/car/' + id);
  }

  getAllClient(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/client');
  }
  getStatJour(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/stat/affaire/jour');
  }
  getStatMonth(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/stat/affaire/month');
  }

  getStatReparation(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/stat/reparationCar');
  }
  getStatBenefice(parametre1 : any,value:any): Observable<any> {
    if(parametre1=='salaire'){
    return this.http.post('https://apt.mg/mical-garage/admin/stat/benefice',{'salaire':value},{});
    }
    else if(parametre1=='loyer'){
      return this.http.post('https://apt.mg/mical-garage/admin/stat/benefice',{'loyer':value},{});
      }
      else if(parametre1=='achatPiece'){
        return this.http.post('https://apt.mg/mical-garage/admin/stat/benefice',{'achatPiece':value},{});
        }
        else if(parametre1=='autreDepense'){
          return this.http.post('https://apt.mg/mical-garage/admin/stat/benefice',{'autreDepense':value},{});
          }
      else{
        return this.http.post('https://apt.mg/mical-garage/admin/stat/benefice',{},{});
      }
  }

  getOneClient(_id: any): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/client/'+ _id);
  }

 
   addCarReparation(numero : any,param:any,valeur:any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/admin/car/reparation/'+numero,{cleRepration:param,valeurReparation:valeur},{} );
  }
  addCarReception(numero : any): Observable<any> {
    
    return this.http.post('https://apt.mg/mical-garage/admin/car/recpetionne/'+numero,{},{} );
  }



  addCarFacture(idVoiture : any,param:any,valeur:any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/admin/car/facture/'+idVoiture,{cleFacture:param,valeurFacture:valeur},{});
  }


  //--------------not used yet---------------
  adminCarSearch( cleSearch : any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/admin/car/search',  cleSearch);
  }
  //--------------------------------------------
  
  //--------------not used yet---------------
  adminClientSearch( cleSearch : any): Observable<any> {
   return this.http.post('https://apt.mg/mical-garage/admin/client/search',  cleSearch);
  }
  //--------------------------------------------

  adminNotificationClient(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/admin/notification');
  }
  validateFacture( id : any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/admin/facture/validate/'+  id,{},{});
   }
   

      
  
  carOut( id : any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/admin/car/sortie/'+  id,{},{});
   }


  addAdmin({ usernameAdmin, passwordAdmin, roleAdmin }: any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/admin/add', {
      usernameAdmin,
      passwordAdmin,
      roleAdmin,
    });
  }

  logoutAdmin(): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/admin/logout', null);
  }

  getClient(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/client/');
  }
 
  
  notificationClient(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/client/notification');
  }

  carClient(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/client/car');
  }

    //--------------not used yet---------------
  carOneClient(id: any): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/client/car/'+id);
  }


  factureClient(): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/client/facture');
  }


     //--------------not used yet---------------
 factureOneClient(id: any): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/client/facture/'+id);
  }

   //--------------not used yet---------------
  carClientReception(valeur: any): Observable<any> {
    return this.http.get('https://apt.mg/mical-garage/client/car/reception/'+valeur);
  }

  //--------------not used yet---------------
   clientCarSearch( cleSearch : any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/client/car/search',  {cleSearch:cleSearch},{});
  }
  cancelCarClient(id:any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/client/car/cancel',{carId:id},{});
  }
  addCarClient({ numero, marque, modele, annee }: any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/client/car', {
      numero,
      marque,
      modele,
      annee,
    });
  }

   
   validateFactureClient( idVoiture: any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/client/validate/'+idVoiture,{},{});
   }

   

  addClient({
    username,
    password,
    nom,
    prenom,
    adress,
    phone,
    email,
  }: any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/client/subscribe', {
      username,
      password,
      nom,
      prenom,
      adress,
      phone,
      email,
    });
  }

  logClient({ email, password }: any): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/client/login', { email, password });
  }
 

  logoutClient(): Observable<any> {
    return this.http.post('https://apt.mg/mical-garage/client/logout', null);
  }

  setPrivilage(a: string): void {
    localStorage.setItem('privilage', a);
  }
  getPrivilage() {
    return Number(localStorage.getItem('privilage'));
  }
  setTokenClient(token: string): void {
    localStorage.setItem('tokenClient', token);
  }
  setTokenAdmin(token: string,role:string): void {
    localStorage.setItem('token'+role, token);
  }

  getTokenClient(): string | null {
    return localStorage.getItem('tokenClient');
  }
  getTokenAdmin(role:string): string | null {
    return localStorage.getItem('token'+role);
  }

  isLoggedInClient() {
    return this.getTokenClient() !== null;
  }
  isLoggedInAdmin(role:string) {
    return this.getTokenAdmin(role) !== null;
  }
  removeAllToken(){
    localStorage.removeItem('tokenClient');
    localStorage.removeItem('tokenAdmin');
    localStorage.removeItem('tokenatelier');
    localStorage.removeItem('tokenfinancier');
    localStorage.removeItem('tokenadmin');
    localStorage.removeItem('token');
  }
  logoutTokenClient() {
    localStorage.removeItem('tokenClient');
    this.router.navigate(['home']);
  }
  logoutTokenAdmin(role:string) {
    this.removeAllToken();
    this.router.navigate(['home']);
  }


}
