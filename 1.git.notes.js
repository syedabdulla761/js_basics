const notes=`
Git basics 

Git is a version control system. It keeps tracks of the given/updated files. Commit is similar to taking snapshot. 

Terminal commands :- 

Ls –a :- shows hidden files in local. 

Git commands:- 

Repository is one folder where your tracking everything via git. 

Branches in repository:- there will be a master repository which can be made to be connected to branches where extra commits are made then commits in branch can be joined to master repo. 

Git clone:- is to pull a remote repository into local 

Index :- imaginary folder 

Git add:- adds files into index 

Git commit:- saves file in local. 

Git push:- updates file in git repo." Git push –u origin master" to connect local to remote repo. 

Git diff:- difference between file in remote repo and local. 

Git commit –m " //comments// " :-direct writing the comment 

Git log:- lists of all commits starting from latest in local. 
 
`
console.log(notes)