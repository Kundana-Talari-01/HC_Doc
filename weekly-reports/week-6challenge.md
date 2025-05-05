# Week-6 Challenge Report

## Challenge: Git Submodule Issue in "suku-hospital" Project

While working on the **SUKU Multispeciality Hospital** project in Angular, I faced a version control issue when trying to push my project to GitHub. 

### Problem Faced:
When I tried to `git add` my `Projects/suku-hospital` folder, Git returned the following error:

```
fatal: Pathspec 'Projects/suku-hospital/*' is in submodule 'Projects/suku-hospital'
```

This happened because the `suku-hospital` folder was accidentally initialized as a separate Git repository, making it a **Git submodule** instead of a normal folder inside my main project.

### Solution:
1. **Removed submodule reference** from main repo using:
   ```bash
   git rm --cached Projects/suku-hospital
   ```

2. **Deleted the `.git` folder** inside `Projects/suku-hospital` to break its link as a submodule.

3. **Re-added the folder** as a regular project folder using:
   ```bash
   git add Projects/suku-hospital
   git commit -m "Fixed submodule issue, added suku-hospital as regular folder"
   ```

4. **Pushed the changes** successfully to GitHub using:
   ```bash
   git push origin main
   ```

### What I Learned:
- How Git submodules work and how to identify them.
- How to convert a mistakenly added submodule into a regular directory.
- Better understanding of Git structure and troubleshooting real-world version control issues.

This challenge helped me gain confidence in debugging and resolving Git problems during real project development.
