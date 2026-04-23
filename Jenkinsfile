pipeline{
    agent{
        docker{
            image 'mcr.microsoft.com/playwright:v1.59.1-noble'
            args '-u=root --entrypoint='
        }
    }
    parameters{
        booleanParam(name: 'istags', defaultValue: false, description: 'executer avec ou sans tags')
        choice(name: 'Tags', choices: ['@e2e', '@invalide', '@valide'], description: 'Choisissez le choix de tag')
        booleanParam(name: 'isbrowser', defaultValue: false, description: 'executer avec ou sans browser')
        choice(name: 'browser', choices: ['firefox','chromium','webkit'], description: 'Choisissez le choix du navigateur')   
    }
    stages{
        stage('Installer les dependances'){
            steps{
                sh 'npm install'
            }
        }
        stage('Fait le choix des parametres avant execution'){
            steps{
                script{
                    // ca verifie automatiquement que le parametre est egal à true
                    if(params.istags && params.isbrowser){
                        //vrai et vrai
                        sh"npx playwright test --grep ${params.tags} --project=${params.browser}"
                    } else if(params.isbrowser){
                        //faux et vrai
                        sh"npx playwright test --project=${params.browser}"
                    }else if(params.istags){
                        //vrai et faux
                        sh"npx playwright test --grep ${params.tags}"
                    }else {
                        //faux et faux
                        sh"npx playwright test"
                    }
                }
            }
        }
    }


}