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
                sh 'docker build -t chew01/kitsuiro-landing-page . --no-cache'
            }
        }
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                withDockerRegistry([credentialsId: "dockerhub", url: ""]) {
                    sh 'docker push chew01/kitsuiro-landing-page:latest'
                }
            }
        }
        stage('Cleanup') {
            steps {
                sh 'docker rmi -f chew01/kitsuiro-landing-page'
            }
        }
    }
}
