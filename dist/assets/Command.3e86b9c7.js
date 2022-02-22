import{_ as n}from"./index.d81d2172.js";import{o as t,c as r,a as e}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},i={id:"n",class:"post-content"},l=e("h3",{class:"page-title"},"Command Line",-1),s=e("blockquote",null,[e("p",null,"Terminal on Mac OS")],-1),a=e("pre",null,[e("code",{class:"lang-shell"},`#SHORTCUTS
Tab | Auto-complete files and folder names
Ctrl + A | Go to the beginning of the line you are currently typing on
Ctrl + E | Go to the end of the line you are currently typing on
Ctrl + U | Clear the line before the cursor
Ctrl + K | Clear the line after the cursor
Ctrl + W | Delete the word before the cursor
Ctrl + T | Swap the last two characters before the cursor 
Esc + T | Swap the last two words before the cursor
Ctrl + R | Lets you search through previously used commands
Ctrl + L or Command + K | Clears the Screen
Ctrl + C | Kill whatever you are running
Ctrl + D | Exit the current shell

#=======================

#CORE COMMANDS
cd | Home directory
cd [folder] | Change directory
cd ~ | Home directory, e.g. 'cd ~/folder/'
cd / | Root of drive
ls | Short listing
ls -l | Long listing
ls -a | Listing incl. hidden files
ls -lh | Long listing with Human readable file sizes
ls -R | Entire content of folder recursively
sudo [command] | Run command with the security privileges of the superuser (Super User DO)
open [file] | Opens a file
open . | Opens the directory
top | Displays active processes. Press q to quit
nano [file] | Opens the Terminal it's editor
pico  [file] | Opens the Terminal it's editor
q | Exit
clear | Clear screen

#=======================

#COMMAND HISTORY
history n | Shows the stuff typed - add a number to limit the last n items
ctrl-r | Interactively search through previously typed commands
![value] | Execute the last command typed that starts with 'value'
!! | Execute the last command typed

#=======================

#FILE MANAGEMENT
touch [file] | Create new file
pwd | Full path to working directory
.. | Parent/enclosing directory, e.g.
ls -l .. | Long listing of parent directory
cd ../../ | Move 2 levels up
. | Current folder
cat | Concatenate to screen
rm [file] | Remove a file, e.g. rm [file] [file]
rm -i [file] | Remove with confirmation
rm -r [dir] | Remove a directory and contents
rm -f [file] | Force removal without confirmation
rm -i [file] | Will display prompt before
cp [file] [newfile] | Copy file to file
cp [file] [dir] | Copy file to directory
mv [file] [new filename] | Move/Rename, e.g. mv -v [file] [dir]

#=======================

#DIRECTORY MANAGEMENT
mkdir [dir] | Create new directory
mkdir -p [dir]/[dir] | Create nested directories
rmdir [dir] | Remove directory ( only operates on empty directories )
rm -R [dir] | Remove directory and contents

#PIPES - Allows to combine multiple commands that generate output
more | Output content delivered in screensize chunks
> [file] | Push output to file, keep in mind it will get overwritten
>> [file] | Append output to existing file
< | Tell command to read content from a file

#=======================

#HELP
[command] -h | Offers help
[command] --help | Offers help
[command] help | Offers help
reset | Resets the terminal display
man [command] | Show the help for 'command'
whatis [command] | Gives a one-line description of 'command'`)],-1),c=e("hr",null,null,-1),d=[l,s,a,c];function m(h,f,p,u,y,C){return t(),r("div",i,d)}var w=n(o,[["render",m]]);export{w as default};
