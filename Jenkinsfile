pipeline{
    agent any
    parameters{
        booleanParam(name:'ALLURE', defaultValue: false, description: 'generation de rapport allure')
        booleanParam(name: 'istags', defaultValue: false, description: 'executer avec ou sans tags')
        choice(name: 'Tags', choices: ['@e2e', '@invalide', '@valide'], description: 'Choisissez le choix de tag')
        booleanParam(name: 'isbrowser', defaultValue: false, description: 'executer avec ou sans browser')
        choice(name: 'browser', choices: ['firefox','chromium','webkit'], description: 'Choisissez le choix du navigateur')   
    }
    stages{
        stage('global stage'){
            agent{
                docker{
                    image 'mcr.microsoft.com/playwright:v1.59.1-noble'
                    args '-u root --entrypoint='
                }
            }
            stages{
                stage('install deps'){
                  steps{
                      sh 'npm ci'
                  }
        }
        
        stage('run user test'){
            steps{  
                script{
                    if(params.ALLURE){
                        // ca verifie automatiquement que le parametre est egal à true
                        if(params.istags && params.isbrowser){
                            //vrai et vrai
                            sh"npx playwright test --grep ${params.Tags} --project=${params.browser} --reporter=allure-playwright"
                        } else if(params.isbrowser){
                            //faux et vrai
                            sh"npx playwright test --project=${params.browser} --reporter=allure-playwright"
                        }else if(params.istags){
                            //vrai et faux
                            sh"npx playwright test --grep ${params.Tags} --reporter=allure-playwright"
                        }else {
                            //faux et faux
                            sh"npx playwright test --reporter=allure-playwright"
                        }
                        //copier temporarement tous  ls fichiers allure dans  dossier allure-results
                        stash name: 'allure-results', includes: 'allure-results/*'
                    }else {
                        // ca verifie automatiquement que le parametre est egal à true
                        if(params.istags && params.isbrowser){
                            //vrai et vrai
                            sh"npx playwright test --grep ${params.Tags} --project=${params.browser}"
                        } else if(params.isbrowser){
                            //faux et vrai
                            sh"npx playwright test --project=${params.browser}"
                        }else if(params.istags){
                            //vrai et faux
                            sh"npx playwright test --grep ${params.Tags}"
                        }else {
                            //faux et faux
                            sh"npx playwright test"
                        }   
                    }

                }
                
                
            }
        }
            }
        }
        
    }
    post{
        always{
            //unstash 'junit-report'
            //junit 'playwright-report/junit/results.xml'
            script{
                if(params.ALLURE){
                    unstash 'allure-results'
                    archiveArtifacts 'allure-results/*'
                    allure includeProperties:
                     false,
                     jdk: '',
                     results: [[path: 'allure-results/']]
                }
            }
            
        }
    }
}


