# Usage

```sh
cd blogJekyll

# add post in the ./posts
# name the post with yyyy-mm-dd-title.html/md

jekyll serve --baseurl "" # to see the rendered result
jekyll build # to build

cd .. # to the root
gulp build # move the rendered file from _site to build
git add .
git commit -m ""
git push # to publish

# also you can use gulp refresh and chrome to test jekyll with hot loading
gulp refresh # and open chrome with the plugin LiveReload
```