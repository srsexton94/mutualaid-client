
<!-- how can I size this appropriately? -->
![](./images/aoc-mariame.png?raw=true=50x50)
# Mutual Aid, Dual Power
## Project Description
This project is a social networking app that is designed to support Mutual Aid network organizing efforts.  Recently, in the wake of the COVID-19 global crisis, Mutual Aid networks and resources have emerged all over the world.  However many of the networks are disconnected and there isn’t a prominent common resource connecting/compiling this information.

This app is intended to stand as a both a network in and of itself, as well as a compilation of other networks and resources to help get users connected to the resources they need, in the medium that works for them.

### Mutual Aid & Dual Power
'Mutual Aid' as an organizing theory largely emerged from the writings and activism of [Pyotr Kropotkin](https://en.wikipedia.org/wiki/Peter_Kropotkin), referring to reciprocal community support intended as non-hierarchical, voluntary, and free exchanges between members of a society or group.

'Dual Power' on the other hand, largely attributted to Bolsheviks and [Lennin](https://en.wikipedia.org/wiki/Vladimir_Lenin) but having its origins in the writings of [Pierre-Joseph Proudhon](https://en.wikipedia.org/wiki/Pierre-Joseph_Proudhon), refers to the coexisitence and competition between powers (contextually, proletariat/democratic vs. capitalist/autocratic) in transition away from injustice.

In that vein, this project is intended to offer a means to go *beyond* mutual aid, and help people mobilize and organize towards collective action.

For more information:
- [New York Times - *Feeling Powerless About Coronavirus? Join a Mutual-Aid Network*](https://www.nytimes.com/2020/03/23/opinion/coronavirus-aid-group.html)
- [ROAR - *From Mutual Aid to Dual Power in the State of Emergency*](https://roarmag.org/essays/from-mutual-aid-to-dual-power-in-the-state-of-emergency/?fbclid=IwAR2V59HOXRGC-at-3NqYW2dYp8rh-5DUTbQTTmKwN9c2VGHZiF8qYVpf0XU)
- [Wikipedia - *Dual Power*](https://en.wikipedia.org/wiki/Dual_power)
- [Kropotkin - *Mutual Aid: A Factor of Evolution*](https://www.marxists.org/reference/archive/kropotkin-peter/1902/mutual-aid/index.htm) (full text)

## Dependencies
* General Assembly [React Auth Template](https://git.generalassemb.ly/ga-wdi-boston/react-auth-template) (includes linter, scss, webpack config, npm scripts, auth routes) Features...
  - `<AuthenticatedRoute />` - takes user as a prop!
    - (debug: change `to="/"` to `href="#/"`)
  - `<AutoAlertDismiss />` - displays user messages, already required in `App` - use by passing `alertMsg` method to a rendered route
    - `alertMsg` expects an aboject with `heading`, `message`, and `variant` (ie bootstrap) properties
    - use with `messages.js`
  - `src/apiConfig.js` - determines production/development & chooses API URL, replace `production` with deployed API's URL
* `npm install`: installs dependencies in package.json
* `npm run nag`: runs code quality analysis tools on your code and complains.
* `npm run make-standard`: reformats all your code in the JavaScript Standard Style.
* `npm run start`: generates bundles, watches, and livereloads.
* `npm run build`: place bundled styles and scripts where `index.html` can find them
* `npm run deploy`: builds and deploys master branch
* Bootstrap


## User Stories
- As an unregistered user I want to be able to
  - view all public posts and access their content/links
  - sign up/create an account
- As a registered user I want to be able to…
  - sign in, update my info, & sign out
  - view all posts
  - view a specific subdivision of posts
  - view a specific post
  - create, update, and delete my own posts

#### MVP
* Provide sign up/in/out and change password
* Display all posts, view a single post, update/delete your own post

#### Moderate Stretch Goals
* Display all posts sorted by type (tabs in wireframes)
* Sort posts by time AND location
* Add comments resource to posts
* Update entire account information, not just password
* Add user profile pictures/photos in posts

#### Stretch "for the stars!"
* Offer “forgot password?” change to un-signed in users
* Offer google/facebook authentication
* Display networks and/or offer posts on a map

## ERD
![](./images/erd.png?raw=true=50x50)

## Wireframes
![](./images/wireframe1.png?raw=true=50x50)
 ![](./images/wireframe2.png?raw=true=50x50)
