<template>

<div id="n" class="post-content">

<h3 class="page-title">GitHub</h3>
<blockquote>
 <p>This cheat sheet features the most important and commonly
used Git commands for easy reference.</p>
</blockquote>
<pre><code class="lang-shell">#CONFIGURATIONS
git config --global user.name "[firstname lastname]"
git config --global user.email "[valid-email]"
#set automatic command line coloring for Git for easy reviewing
git config --global color.ui auto

#=======================

#SETUP & INIT
#initialize an existing directory as a Git repository
git init
#retrieve an entire repository from a hosted location via URL
git clone [url]

#=======================

#STAGE & SNAPSHOT
#show modified files in working directory, staged for your next commit
git status
#add a file as it looks now to your next commit (stage)
git add [file]
#unstage a file while retaining the changes in working directory
git reset [file]
#diff of what is changed but not staged
git diff
#diff of what is staged but not yet committed
git diff --staged
#commit your staged content as a new commit snapshot
git commit -m “[descriptive message]”

#=======================

#BRANCH & MERGE
#list your branches. a * will appear next to the currently active branch
git branch
#create a new branch at the current commit
git branch [branch-name]
#switch to another branch and check it out into your working directory
git checkout
#merge the specified branch’s history into the current one
git merge [branch]
#show all commits in the current branch’s history
git log

#=======================

#INSPECT & COMPARE
#show the commit history for the currently active branch
git log
#show the commits on branchA that are not on branchB
git log branchB..branchA
#show the commits that changed file, even across renames
git log --follow [file]
#show the diff of what is in branchA that is not in branchB
git diff branchB...branchA
#show any object in Git in human-readable format
git show [SHA]

#=======================

#TRACKING PATH CHANGES
#delete the file from project and stage the removal for commit
git rm [file]
#change an existing file path and stage the move
git mv [existing-path] [new-path]
#show all commit logs with indication of any paths that moved
git log --stat -M

#=======================

#IGNORING PATTERNS
#Save a file with desired patterns as .gitignore with either direct string
matches or wildcard globs
logs/
*.notes
pattern*/
#system wide ignore pattern for all local repositories
git config --global core.excludesfile [file]

#=======================

#SHARE & UPDATE
#add a git URL as an alias
git remote add [alias] [url]
#fetch down all the branches from that Git remote
git fetch [alias]
#merge a remote branch into your current branch to bring it up to date
git merge [alias]/[branch]
#Transmit local branch commits to the remote repository branch
git push [alias] [branch]
#fetch and merge any commits from the tracking remote branch
git pull

#=======================

#REWRITE HISTORY
#apply any commits of current branch ahead of specified one
git rebase [branch]
#clear staging area, rewrite working tree from specified commit
git reset --hard [commit]

#=======================

#TEMPORARY COMMITS
#Save modified and staged changes
git stash list
#list stack-order of stashed file changes
git stash
#write working from top of stash stack
git stash pop
#discard the changes from top of stash stack
git stash drop</code></pre>
<hr />

</div>
</template>

<script>

export default {
  mounted() {
    Prism.highlightAll()
  }
};
</script>