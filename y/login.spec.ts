import { test, expect } from '@playwright/test';
import { accueilpom } from '../pages/accueilpom.page';
import { inscriptionpom } from '../pages/inscriptionpom.page';
import { loginpom } from '../pages/loginpom.page';

let acc: accueilpom;
let ins: inscriptionpom;
let lp: loginpom;
test.beforeEach('setup', async ({ page }) => {
    lp = new loginpom(page)
    acc = new accueilpom(page)
    ins = new inscriptionpom(page)
    //Given je visite le site "https://agropeyi.fr/"
    await page.goto("https://agropeyi.fr/");
    await acc.clickconnexion();

})
//    Background: 

//   Scenario: connexion invalide
test("connexion invalide", { tag: "@invalide" }, async ({ page }) => {
    //     When je clique sur le bouton connexion
    //     And je saisis l'email "abrrr@gmail.com"
    await lp.saisirEmail("abrrr@gmail.com");
    //     And je saisis le mdp "1234567"
    await lp.saisirMdp("111111");

    //     And je clique sur bouton connexion
    await lp.clickbtn_seconnecter();
    //     Then un message s'affiche "Erreur !Email ou mot de passe incorrect."
    await expect(lp.getMsgMssError()).toBeVisible()
})
//   Scenario: connexion valide
test("connexion valide", { tag: "@valide" }, async ({ page }) => {

    //     And je saisis l'email "AB@gmail.com"
    await lp.saisirEmail("ab@gmail.com");
    //     And je saisis le mdp "123456"
    await lp.saisirMdp("123456");
    //     And je clique sur bouton se connecter
    await lp.clickbtn_seconnecter();
    //     And verifier que les deux boutons inscription et connexion n'apparaissent pas .
    expect(await acc.getConnexion().isVisible()).toBeFalsy()
    expect(await acc.getInscription().isVisible()).toBeFalsy()
    //     Then verifier que le prenom "Az" s'affiche
    await expect(acc.getBtnPrenom()).toContainText("AZ");


})







