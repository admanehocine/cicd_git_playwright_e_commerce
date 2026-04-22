import{Page} from '@playwright/test'

export class inscriptionpom{
   readonly page:Page;

   constructor(p:Page){
    this.page = p;
   }
   //locator 
   elements={

        nom:()=>this.page.locator("#nom"),
        prenom:()=>this.page.locator("#prenom"),
        email:()=>this.page.locator('#email'),
        mdp:()=>this.page.locator('#mot_de_passe'),
        confirmation_mdp:()=>this.page.locator('#confirmer_mot_de_passe'),
        btn_inscrire:()=>this.page.getByRole('button', {name:"S'inscrire"}),
        msg_succes:()=>this.page.locator('.alert.alert-success'),
        msg_faillur:()=>this.page.locator('.alert.alert-danger')
   }
    async saisirNom(n:string){
    await this.elements.nom().fill(n);
   }
   async saisirPrenom(p:string){
    await this.elements.prenom().fill(p);
   }
    async saisirEmail(e:string){
    await this.elements.email().fill(e);
    }
    async saisirMdp(m:string){
    await this.elements.mdp().fill(m);
   }
   async saisirConfMdp(cm:string){
    await this.elements.confirmation_mdp().fill(cm);
   }
    async clickInscrire(){
    await this.elements.btn_inscrire().click();
   }
    getMsgSucces(){
    return this.elements.msg_succes()
   }
   getMsgFaillur(){
    return this.elements.msg_faillur()
   }
}
