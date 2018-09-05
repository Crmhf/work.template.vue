Win+R Alias Manager
by Sergey "Happy Bulldozer" Tkachenko, 
http://winaero.com

Impressive application icon by Rhor, http://rhor.deviantart.com

Change log
v2.0.0.2
Fixed a bug: you were unable to edit/delete aliases after grid sorting
v2.0.0.1
Fixed a bug in elevated start/limited account in Windows Vista, Windows 7 and Windows 8
v2.0
Added sorting by click on column's header
Added resizing of columns
Added settings. The settings are following:
* Delete confirmation
* Run confirmation
* Replace confirmation (if you will try to create alias which already exists, you will get it.
* Small icons
Added export to registry file feature for selected aliases
Added filter for fast searching. TIP: Press Enter to jump from Filter text box into the grid
Main mindow now saves its size
"Work with system-wide aliases" checkbox now saves its state
New hotkeys are following:
* Insert - add an alias
* Alt+E or F2 - edit an alias
* Ctrl+F or F3 - search/filter option
* Ctrl+Home or Home - navigate to the first alias
* Delete - delete an alias 
* Ctrl+End or End - navigate to the last alias
* Alt+R - run selected alias
* Alt+B - show a file which has the current alias
Bug fixed: wrong elevated launch
Bug fixed: the plus + character is allowed in the Run window, but not by this program
Bug fixed: grid did not remember the cursor position after delete
Bug fixed: editing an alias in the middle of the word, moves my cursor to the end for every typed character.
Bug fixed: REG_SZ was used instead of REG_EXPAND_SZ
Lots of improvements in code

v1.0.0.1
Fixed issue: crash under Windows XP.
Fixed issue: Windows XP and Windows Vista users saw "per-user" aliases, however, this feature is available only since Windows 7.
Fixed issue: proper behavior when you have administrator's right (useless bits was removed) and when you have not. Also no shield on buttons for elevated instance and better Vista handling.
Fixed issue: edit dialog does not closes with Enter key.
Fixed issue: edit dialog can not be closed with Cancel button if file path was wrong.
Fixed issue: duplicates of aliases instead of single edited alias.
Fixed issue: possible edit mode crash.
Lots of minor improvements in code.
--------------------------------
Added: suggestions in "file path" text box. Try to type the file path from keyboard.
Added: %path% handling. Try to enter just cmd.exe or mspaint.exe.
Added: suggestion to add new alias if you have none.

v1.0
Initial release