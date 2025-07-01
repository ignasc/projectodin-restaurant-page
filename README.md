# Project Odin - Restaurant Page

A small task to build a simple webpage with tabs, using JS modules.

Work is still in progress, but basic working live preview is already awailable [here](https://ignasc.github.io/projectodin-restaurant-page/).


### Note to self
Instructions from Odin Project website to update the deployed page, since github searches for index.html file, which is located in dist folder after website is built:

1. Make sure main branch is up to date without pending commits.
2. Switch to gh-pages branch and 'main' branch into this one.
```
git checkout gh-pages && git merge main --no-edit
```
3. Build website using command below.
```
npx webpack
```
4. Run following commands in order:
```
git add dist -f
git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
```
5. Switch back to main branch.
```
git checkout main
```
