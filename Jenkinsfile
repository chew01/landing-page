pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build (not main)') {
            when {
                not {
                    branch 'main'
                }
            }
            steps {
                sh 'docker build -t chew01/kitsuiro-landing-page . --no-cache'
                sh 'docker rmi -f chew01/kitsuiro-landing-page'
            }
        }
        stage('Build (main)') {
            when {
                branch 'main'
            }
            steps {
                sh 'docker build -t chew01/kitsuiro-landing-page . --no-cache'
                withDockerRegistry([credentialsId: "dockerhub", url: ""]) {
                    sh 'docker push chew01/kitsuiro-landing-page:latest'
                }
                sh 'docker rmi -f chew01/kitsuiro-landing-page'
            }
        }
    }
}
