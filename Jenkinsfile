pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                withDockerRegistry([credentialsId: "dockerhub", url: ""]) {
                    sh 'docker build -t chew01/kitsuiro-landing-page . --no-cache'
                    sh 'docker push chew01/kitsuiro-landing-page:latest'
                    sh 'docker rmi -f chew01/kitsuiro-landing-page'
                }
            }
        }
    }
}
