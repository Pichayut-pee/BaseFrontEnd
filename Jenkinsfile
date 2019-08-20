node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage ('Code analyse') {
    sh 'echo "Run some lints"'
    }
    stage ('Unit test') {
    sh 'echo "Tests will back"'
    }
    stage ('Build') {
    sh 'npm install'
    sh 'npm start'
    }
  }
  catch (err) {
    throw err
  }
}