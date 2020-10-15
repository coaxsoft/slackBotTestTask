# Sample Slack Bot (Serverless framework, AWS provider)

## What you need

 - AWS account

 - Slack workspace

## How to run?
 
 - configure your serverless credentials `serverless config credentials --provider aws --key <key> --secret <secret>`
  
 - `npm install`
 
 - set config params in `env.yml`. (Copy `env.example.yml` to `env.yml`) - you should create a Slack APP first
 
 - run deploy `sls deploy`

 - copy API Gateway endpoint to Request URL: `https://<your_endpoint>/dev/slack`
 

## How to setup a slack-bot?
 
 - create a slack APP

 - set "Interactivity & Shortcuts" to "ON"

 - add Shortcut with callbackId = `showModal`

 - install slack app to your workspace

 - press recently created shortcut


## TODO

 - oAuth