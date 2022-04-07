pipeline {
    agent {
        docker { image 'node:lts-alpine3.15' }
    }
    stages {
        stage('Initialize'){
            def dockerHome = tool 'myDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t chew01/kitsuiro-landing-page --no-cache'
                sh 'docker push chew01/kitsuiro-landing-page:latest'
                sh 'docker rmi chew01/kitsuiro-landing-page'
            }
        }
    }
}
