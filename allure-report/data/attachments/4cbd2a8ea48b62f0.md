# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> connexion invalide
- Location: y\login.spec.ts:21:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_RESET at https://agropeyi.fr/
Call log:
  - navigating to "https://agropeyi.fr/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { accueilpom } from '../pages/accueilpom.page';
  3  | import { inscriptionpom } from '../pages/inscriptionpom.page';
  4  | import { loginpom } from '../pages/loginpom.page';
  5  | 
  6  | let acc: accueilpom;
  7  | let ins: inscriptionpom;
  8  | let lp: loginpom;
  9  | test.beforeEach('setup', async ({ page }) => {
  10 |     lp = new loginpom(page)
  11 |     acc = new accueilpom(page)
  12 |     ins = new inscriptionpom(page)
  13 |     //Given je visite le site "https://agropeyi.fr/"
> 14 |     await page.goto("https://agropeyi.fr/");
     |                ^ Error: page.goto: net::ERR_CONNECTION_RESET at https://agropeyi.fr/
  15 |     await acc.clickconnexion();
  16 | 
  17 | })
  18 | //    Background: 
  19 | 
  20 | //   Scenario: connexion invalide
  21 | test("connexion invalide", { tag: "@invalide" }, async ({ page }) => {
  22 |     //     When je clique sur le bouton connexion
  23 |     //     And je saisis l'email "abrrr@gmail.com"
  24 |     await lp.saisirEmail("abrrr@gmail.com");
  25 |     //     And je saisis le mdp "1234567"
  26 |     await lp.saisirMdp("111111");
  27 | 
  28 |     //     And je clique sur bouton connexion
  29 |     await lp.clickbtn_seconnecter();
  30 |     //     Then un message s'affiche "Erreur !Email ou mot de passe incorrect."
  31 |     await expect(lp.getMsgMssError()).toBeVisible()
  32 | })
  33 | //   Scenario: connexion valide
  34 | test("connexion valide", { tag: "@valide" }, async ({ page }) => {
  35 | 
  36 |     //     And je saisis l'email "AB@gmail.com"
  37 |     await lp.saisirEmail("ab@gmail.com");
  38 |     //     And je saisis le mdp "123456"
  39 |     await lp.saisirMdp("123456");
  40 |     //     And je clique sur bouton se connecter
  41 |     await lp.clickbtn_seconnecter();
  42 |     //     And verifier que les deux boutons inscription et connexion n'apparaissent pas .
  43 |     expect(await acc.getConnexion().isVisible()).toBeFalsy()
  44 |     expect(await acc.getInscription().isVisible()).toBeFalsy()
  45 |     //     Then verifier que le prenom "Az" s'affiche
  46 |     await expect(acc.getBtnPrenom()).toContainText("AZ");
  47 | 
  48 | 
  49 | })
  50 | 
  51 | 
  52 | 
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
```