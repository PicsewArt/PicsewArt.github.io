styles=('ubuntu' 'tufte' 'template' 'plain' 'notebook' 'monospace' 'medium' 'material-teal' 'material-red' 'material-purple' 'material-pink' 'material-orange' 'material-grey' 'material-green' 'material-brown' 'material-blue' 'material-amber' 'italian-pop' 'gazette' 'fedora' 'dark' 'clean' 'boot-yeti' 'boot-superhero' 'boot-spacelab' 'boot-slate' 'boot-sandstone' 'boot-readable' 'boot-paper' 'boot-lumen' 'boot-journal' 'boot-flatly' 'boot-darkly' 'boot-cyborg' 'boot-cosmo' 'boot-cerulean' 'asciidoctor' 'adoc-rubygems' 'adoc-rocket-panda' 'adoc-riak' 'adoc-readthedocs' 'adoc-maker' 'adoc-iconic' 'adoc-golo' 'adoc-github' 'adoc-foundation' 'adoc-foundation-potion' 'adoc-foundation-lime' 'adoc-colony')
path='/Users/ezra/Container/Common/Git/Cave/docs/asciidoc'
for s in ${styles[@]}; do
  asciidoctor -a stylesheet=$path/stylesheets/$s.css -o $path/previews/$s.html $path/sources/index.adoc
done

cp $path/previews/adoc-golo.html $path/index.html
