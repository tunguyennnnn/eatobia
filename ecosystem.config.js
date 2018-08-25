module.exports = {
  apps: [{
    name: 'eatobia',
    script: './server/app.js',
    exec_interpreter: './node_modules/babel-cli/bin/babel-node.js',
    watch: true,
    env: {
      'NODE_ENV': 'development'
    },
    env_production: {
      'NODE_ENV': 'production'
    }
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-183-130-255.ca-central-1.compute.amazonaws.com',
      key: '~/.ssh/eatobia.pem',
      ref: 'origin/master',
      repo: 'git@bgithub.com:tunguyennnnn/eatobia.git',
      path: '/',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
