# CONTRIBUTING to Mutual Aid, Dual Power: Client Side

Thank you so much for thinking of contributing to the Mutual Aid Client project! It's awesome you're here, we really appreciate it. :-\)

## Getting Set Up

### Step 1: Git ready (`git` and GitHub)
We use git for version control and keep the project repository on GitHub.
You'll need to be able to use both of those.

* Register on [Github](http://github.com)  (it's free)
* Install [git](https://git-scm.com/)
Clone the repo
We offer regular pair programming sessions that you are very welcome to join! We feel this is often the best way to get to know both the project and the team.

### Step 2: Clone the repo locally

* Clone the repository to your local development machine (or where-ever you are going to do your development coding).
  To clone the fork, run the following command on your local machine:
    
    `git clone https://github.com/srsexton94/mutualaid-client.git`

    or 

    `git clone git@github.com:srsexton94/mutualaid-client.git`

You should now have the entire project -- all of the directories and files -- on your local machine, _and_ it should have a `git` repository (`.git`).

### Step 3: Install dependencies

* You can install the project's dependencies by running:

```sh
# from mutualaid-client/ directory
npm install
npm install styled-components
```
See [Dependencies (Set up & Installation)](https://github.com/srsexton94/mutualaid-client#dependencies-set-up--installation)


## Development Flow

We use the [Project Board](https://github.com/users/srsexton94/projects/1). All issues are also linked to and synced with [Github](https://github.com/Human-Connection/Human-Connection/issues). Look for the `good first issue` label if you're not sure where to start!

We try to discuss all questions directly related to a feature or bug in the respective issue, in order to preserve it for the future and for other developers. We use discord(??) for real-time communication.

This is how we solve bugs and implement features, step by step:
1. We find an issue we want to work on.
2. We communicate with the team by assigning ourselves to the issue.
3. We make sure we understand the issue in detail – what problem is it solving and how should it be implemented?
4. We start working on it in a `new branch` and open a `pull request` prefixed with `[WIP]` (work in progress) to which we regularly push our changes.
5. When questions come up we clarify them with the team (directly in the issue on Github).
6. When we are happy with our work and our PR is passing all tests we remove the `[WIP]` from the PR description and ask for reviews.
7. We then incorporate the suggestions from the reviews into our work and once it has been approved it can be merged into master!

Every pull request needs to:
* fix an issue (if there is something you want to work on but there is no issue for it, create one first and discuss it with the team)
* include tests for the code that is added or changed
* pass all tests (linter, frontend, end-to-end)
* be approved by at least 1 developer who is not the owner of the PR

## Philosophy

We practice [collective code ownership](http://www.extremeprogramming.org/rules/collective.html) rather than strong code ownership, which means that:
* developers can make contributions to other people's PRs (after checking in with them)
* we avoid blocking because someone else isn't working, so we sometimes take over PRs from other developers
* everyone should always push their code to branches so others can see it

We believe in open source contributions as a learning experience – everyone is welcome to join our team of volunteers and to contribute to the project, no matter their background or level of experience.

We use pair programming sessions as a tool for knowledge sharing. We can learn a lot from each other and only by sharing what we know and overcoming challenges together can we grow as a team and truly own this project collectively.

As a volunteeer you have no commitment except your own self development and your awesomeness by contributing to this free and open-source software project. Cheers to you!
