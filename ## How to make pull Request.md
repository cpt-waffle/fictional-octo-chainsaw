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

