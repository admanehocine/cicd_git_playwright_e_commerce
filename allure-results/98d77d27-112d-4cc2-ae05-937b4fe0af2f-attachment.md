# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inscription.spec.ts >> inscription valide
- Location: y\inscription.spec.ts:25:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://agropeyi.fr/", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect } from '@playwright/test';
  2  | import { accueilpom } from '../pages/accueilpom.page';
  3  | import { inscriptionpom } from '../pages/inscriptionpom.page';
  4  | 
  5  | let acc:accueilpom;
  6  | let ins:inscriptionpom;
  7  | test.beforeEach('setup', async ({page})=>{
  8  | 
  9  |     acc = new accueilpom(page)
  10 |     ins = new inscriptionpom(page)
  11 |     //Given je visite le site "https://agropeyi.fr/"
> 12 |     await page.goto("https://agropeyi.fr/");
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  13 |     // When je clique sur le boutun inscription 
  14 |     await acc.clickinscription()
  15 |     // And je saisis le nom "AR"
  16 |     await ins.saisirNom('AR')
  17 |     // And je saisis le prénom "AZ"
  18 |     await ins.saisirPrenom('AZ')
  19 |     // And je saisis le mdp "123456"
  20 |     await ins.saisirMdp('123456')
  21 |     // And je saisis la confirmation mdp "123456"
  22 |     await ins.saisirConfMdp('123456')
  23 | } )
  24 | 
  25 | test("inscription valide", {tag:'@e2e'},async ({page})=>{
  26 |     
  27 |     // And je saisis l'email "ab@gmail.com"
  28 |     let number = Math.floor(Math.random()*701)+500 
  29 |     await ins.saisirEmail('ab'+number+'@gmail.com')
  30 |     // And je clique sur s'inscrire
  31 |     await ins.clickInscrire()
  32 |     await expect(ins.getMsgSucces()).toBeVisible()
  33 | 
  34 | })
  35 | test("inscription invalide", {tag:'@invalide'},async ({page})=>{
  36 |     
  37 |     // And je saisis l'email "ab@gmail.com"
  38 |     await ins.saisirEmail('ab@gmail.com')
  39 |     // And je clique sur s'inscrire
  40 |     await ins.clickInscrire()
  41 |     await expect(ins.getMsgFaillur()).toBeVisible()
  42 | 
  43 | })
  44 | 
  45 | 
  46 | 
  47 | 
```