import{test,expect } from '@playwright/test';
import { accueilpom } from '../pages/accueilpom.page';
import { inscriptionpom } from '../pages/inscriptionpom.page';

let acc:accueilpom;
let ins:inscriptionpom;
test.beforeEach('setup', async ({page})=>{

    acc = new accueilpom(page)
    ins = new inscriptionpom(page)
    //Given je visite le site "https://agropeyi.fr/"
    await page.goto("https://agropeyi.fr/");
    // When je clique sur le boutun inscription 
    await acc.clickinscription()
    // And je saisis le nom "AR"
    await ins.saisirNom('AR')
    // And je saisis le prénom "AZ"
    await ins.saisirPrenom('AZ')
    // And je saisis le mdp "123456"
    await ins.saisirMdp('123456')
    // And je saisis la confirmation mdp "123456"
    await ins.saisirConfMdp('123456')
} )

test("inscription valide", {tag:'@e2e'},async ({page})=>{
    
    // And je saisis l'email "ab@gmail.com"
    let number = Math.floor(Math.random()*701)+500 
    await ins.saisirEmail('ab'+number+'@gmail.com')
    // And je clique sur s'inscrire
    await ins.clickInscrire()
    await expect(ins.getMsgSucces()).toBeVisible()

})
test("inscription invalide", {tag:'@invalide'},async ({page})=>{
    
    // And je saisis l'email "ab@gmail.com"
    await ins.saisirEmail('ab@gmail.com')
    // And je clique sur s'inscrire
    await ins.clickInscrire()
    await expect(ins.getMsgFaillur()).toBeVisible()

})



