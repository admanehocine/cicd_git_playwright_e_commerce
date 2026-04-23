import{Page} from '@playwright/test'

export class accueilpom{
   readonly page:Page;

   constructor(p:Page){
    this.page = p;
   }
   //locator 
   elements={
        inscription:()=>this.page.getByRole('link', {name:'Inscription'}),
        connexion:()=>this.page.getByRole('link',{name: 'connexion'}),
        btn_prenom :()=> this.page.locator('.d-none.d-md-inline')

   }
   async clickinscription(){
   await this.elements.inscription().click();
   }
   async clickconnexion(){
   await this.elements.connexion().click();
   }
   getInscription(){
      return this.elements.inscription()
   }
   getConnexion(){
      return this.elements.connexion()
   }
   getBtnPrenom(){
      return this.elements.btn_prenom();
   }

   
}
