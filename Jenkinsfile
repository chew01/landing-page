pipeline {
  agent none
  stages {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Deploy') {
      sh 'docker build -t kitsuiro-landing-page --no-cache .'
    }
  }
}
