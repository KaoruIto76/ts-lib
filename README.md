# typesciprt lib

# install ndenv
```
// ndenv を install
$ git clone https://github.com/riywo/ndenv ~/.ndenv

// 以下を実行しbash_profileに追記(zshはzprofile)
$ echo 'export PATH="$HOME/.ndenv/bin:$PATH"' >> ~/.bash_profile
$ echo 'eval "$(ndenv init -)"' >> ~/.bash_profile

// 環境変数を反映
$ exec $SHELL -l

// nvmを削除(その後bash_profileないのnvmに関する内容を削除)
$ rm -r ~/.nvm

// node-build を install
$ git clone https://github.com/riywo/node-build.git $(ndenv root)/plugins/node-build

// install できるバージョンを確認
$ ndenv install -l
```


## These are references

### Generics
https://blog.mitsuruog.info/2019/03/try-typescript-generics-101

### MyOption
https://gist.github.com/j5ik2o/963781232ee55f1b6f7024722ff83041
