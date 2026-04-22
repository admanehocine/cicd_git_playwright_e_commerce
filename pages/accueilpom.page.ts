import{Page} from '@playwright/test'

export class accueilpom{
   readonly page:Page;

   constructor(p:Page){
    this.page = p;
   }
   //locator 
   elements={
        inscription:()=>this.page.getByRole('link', {name:'Inscription'}),

   }
   async clickinscription(){
   await this.elements.inscription().click();
   }
   
}
