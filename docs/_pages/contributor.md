---
layout: single
author_profile: true
title: Contributor's Guide
permalink: /contributor/
---

# The Big Picture

Accessibility Wars uses a static site generator. This means there is no database, no live scripts, and no way to edit directly on the site.

However, it is built from source code and contributors can make edits and submissions using GitHub's interface (or the git tool directly).

# How to Contribute

## Setup

- Sign up for an account on [GitHub](https://github.com/). Feel free to use whatever name you wish. Be aware all your proposed changes will be associated with this name and it will be public.
- Familiarize yourself with [basic markdown](https://www.markdownguide.org/basic-syntax/)

## Editing an existing build

1. Find a build to edit on the source repository. All builds live in [this github folder](https://github.com/accessibilitywars/aw2-builds/tree/main/docs/_posts)
3. Click the markdown (.md) file to view it in the github editor
4. Click the pencil icon to switch to edit mode
5. Make your changes
6. Click the *Commit Changes...* button
7. Give it a reasonable 1-line commit message and description of what was changed (Berdandy will be reading these so please make them make sense). For example:
  - Commit message: updated mad bomber mechanist to latest balance
  - Extended description: old mad bomber mechanist was missing relics and needed a full trait rework
8. Ensure your email is correct
9. Ensure *Create a new branch for this commit and start a pull request* is selected. Default name is very software oriented (username-patch-N), change it to make sense
  - mad-bomber-balance-update-jan-balance
10. Click *Propose changes*
11. This opens a pull request (git's terminology for a "request for the maintainer to pull your changes in")
12. Again, title and description. Title should be same as step 9. Add description if you wish
13. Click *Create pull request*

From here, the maintainers (Berdandy) will get notified about the submitted changes and can merge them once reviewed. After that, the website builds and should show up in about 2-5 minutes.

## Submitting a new build

*TODO*

- 6-13 is the same as above

## Previewing your build locally

As you can imagine, submitting a build, waiting for approval, and only then being able to see it is a challenge.
This page will be updated in the future with a guide on how to preview the site on your own computer before submitting changes.

*TODO*

## Additional tools

*TODO*

- gw2search
- chatr
- buildwars
