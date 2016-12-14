#decode APP boilerplate
decode App Boilerplate for NodeHeroku Dev Setup

<strong>Tools</strong>

1. Web Framework: [NodeJS](https://nodejs.org/en/download/)
1. Text Editor: [Sublime](https://www.sublimetext.com/3)
1. Version Control: [Git](https://git-scm.com/download/win)
1. Remote Repository: [Github](https://github.com/)
1. Cloud Platform: [Heroku](https://www.heroku.com/)

<strong>Checklist</strong>

 ✔ should have node installed
 
 ✔ should have Sublime Text Editor
 
 ✔ should have Github Account
 
 ✔ should have Heroku Account
 
 ✔ should have Portable Git Bash

<strong>Tasks - Setup</strong>

  1. ```$ node -v```  
  1. ```$ git --version```
  1. ```$ cd /d```
  1. Fork this repo and verify your own github repo's if there is such a ```decodeapp_boilerplate``` repo added to your list of repo.
  1. ```$ git clone https://github.com/yourusername/decodeapp_boilerplate.git myapp```
  1. ```$ cd myapp```  
  1. ```$ npm install```  
  1. Start the server with ```$ node server```
  1. Open browser and navigate to http://localhost:4000 or http://127.0.0.1:4000
  1. Hit ```Ctrl + C``` to stop the server.

<strong>Tasks - Upload code from local to remote repo</strong>

  1. Create new repo ```myapp```
  1. Going back to your gitbash type ```$ git add .```
  1. ```$ git config user.email "youremail@example.com"```
  1. ```$ git config user.name "yourgithubname"```
  1. ```$ git commit -m "first commit"```
  1. ```$ git remote set-url origin https://github.com/yourusername/myapp.git```
  1. ```$ git push -u origin master```
  1. Type your github username then password.
  1. Done. Reload your repo and verify if all files have been updated.
  
<hr/>

<strong>Troubleshooting Guide</strong>

#SSH/HTTP codes

* ```$ cd ~/.ssh```
* ```$ ssh-keygen -t rsa -b 4096 -C "your email address"```

```
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Admin10/.ssh/id_rsa): id_rsa_clydeinwebdev
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

* ```$ eval "$(ssh-agent -s)"```
* ```$ ssh-add ~/.ssh/id_rsa_clydeinwebdev```
* ```$ clip < ~/.ssh/id_rsa_clydeinwebdev.pub```
* Paste the code in to your github ssh settings

* ```$ git remote set-url origin git@github.com:clydeinwebdev/balamanapp.git```
* ```$ git remote -v```
* ```$ git remote set-url origin https://github.com/clydeinwebdev/balamanapp.git```
* ```$ git push -u origin master```


