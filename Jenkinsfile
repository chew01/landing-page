pipeline {
  agent none
  stages {
    stage('Environment') {
      agent node
      steps {
        sh 'git --version'
        echo "Branch: ${env.BRANCH_NAME}"
        sh 'docker -v'
        sh 'printenv'
      }
    }
    stage('Deploy') {
      agent node
      steps {
        sh 'docker build -t kitsuiro-landing-page --no-cache .'
      }
    }
  }
}
