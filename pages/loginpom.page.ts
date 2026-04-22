import{Page} from '@playwright/test'

export class loginpom{
   readonly page:Page;

   constructor(p:Page){
    this.page = p;
   }
   //locator 
   elements={
        
        email:()=>this.page.locator('#email'),
        mdp:()=>this.page.locator('#mot_de_passe'),
        btn_seconnecter:()=>this.page.getByRole("button", {name:"Se connecter"}),
        msg_error :()=> this.page.locator(".alert.alert-danger")
        
   }
  
  
    async saisirEmail(e:string){
    await this.elements.email().fill(e);
    }
    async saisirMdp(m:string){
    await this.elements.mdp().fill(m);
   }
  
    async clickbtn_seconnecter(){
    await this.elements.btn_seconnecter().click();
   }
  
   getMsgMssError(){
    return this.elements.msg_error();
   }
   
}
