pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jeel-portfolio:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker rm -f jeel-portfolio || true

                    docker run -d \
                    --name jeel-portfolio \
                    --restart unless-stopped \
                    -p 80:80 \
                    jeel-portfolio:latest
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    docker ps
                    curl --fail http://localhost:80
                '''
            }
        }

    }

    post {

        success {
            echo 'Portfolio deployed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline Failed!'
        }

    }

}
