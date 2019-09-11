# annual-report-2019

The Centre for International Governance Innovation's 2019 Digital Interactive Annual Report

## Installation
+ `git clone https://github.com/CIGIHub/annual-report-2018.git`
+ `cd annual-report-2018`
+ `npm install`

## Running/Development
+ `ember server`
+ Visit application at [http://localhost:4200](http://localhost4200).

## Running Tests
+ `ember test`

## Deploying
+ Retrieve the commit hash using `git log`
+ It's best to clone this repo into `staging` and `production` directories, so it's easier to continue working on code while deploying
+ If you don't use separate directories, the `heroku` git remote name will clash
+ Staging
  + `heroku git:remote -a cigi-ar2018-staging`
  + `git push heroku staging:master`
  + Deploys to Heroku app: https://dashboard.heroku.com/apps/cigi-ar2018-staging
+ Production
  + `heroku git:remote -a cigi-ar2018`
  + `git push heroku master`
  + Deploys to Heroku app: https://dashboard.heroku.com/apps/cigi-ar2018

## Updating Data
+ Download the JSON from Drupal from http://admin.cigionline.org/annual-report/download/2018
+ Copy array to `vendor/nodes.js`, matching current format.
+ If the images in Cloudinary need to be updated, execute `npm run migrate-images`
  + Once finished executing, the script will update `app/node-images.js`. You can review and test these changes locally before committing.
