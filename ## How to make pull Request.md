## How to make pull Request

we must have our main branch up to date, every time we start working on a feature

```sh
git pull
# or 
git pull origin main
```

Make a branch, make it close to the name of the feature you are working on.

```sh
git branch __branch_name
git checkout __branch_name

# or
git checkout -b __branch_name
```

We begin working our feature, and commiting as often as we can:
to commit, here is a sample:

```sh
git add .
git commit -m"message"
```

if you want to push thouse changes to github to keep the branch global and others can
pull it to pair program, do a git push

```sh
git push origin __branch_name
```

Once the feature is completed and is commited you will push the branch out!

```sh
git push origin __branch_name
```

### Creating pull requests

Pull Requests, are done on github website. Once the branch has been commited, you will go to your repo
website. on the website you will find the pull request tab. Click on it. Once we are on the pull requests
page, we will click on "New Pull Request" Green button

- We will then select the branch that we worked on
- (optional) we will select the correct branch we are proposing the merge on ( make sure its on main/master)
- We will then click the green button that says "create pull request"

It will open up a dialog form where you can write an explanation on what you have done in this branch.

- click the green button that says "create pull request" to make a pull request (PR)


If a merge conflict gets detect to fix it

you will switch to main/master branch and get the latest changes. From there you merge the changes from master
to your branch, and fix em, commiting the fix after

```sh
git checkout main
git pull origin main
git checkout __branch_name
git merge main

# fix changes
# once changes are fixed, commit with message "fix merge conflict"
# push the branch out again
git add .
git commit -m "fix merge conflict"
git push origin __branch_name
```