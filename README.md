# ManuScrape Windows App

ManuScrape is a solution for managing large amounts of observations (images mapped to custom defined parameters), including tools to collect, edit, enrich and export.
<br />
<br />
There are two main actors: the project manager, and the collaborator (can only submit observations).
<br />
<br />

## Basic feature overview:

Project managers can setup projects using the web app:
  1. Enter project name
  2. Define observation parameters
  3. Invite collaborators by email

Collaborators can then submit observations (using native app):
  1. Capture image (using smart tools or file upload)
  2. Edit image
  3. Enter observation parameter values
  4. Attach extra files if any
  5. Submit observation

Whether you're a collaborator or project owner isn't bound to your ManuScrape user, but to your permission role in the specific project.

The project manager can at any time export the entire project into to different formats, including spreadsheets and zip files. Right now the export features are optimized to deliver formats that are easy to import into [NVivo 14](https://lumivero.com/products/nvivo/).
<br />
<br />

## Installation on Windows
Before you start installing, you need to decide where you want to put your data. As of now you can temporarily use [manuscrape.org](https://manuscrape.org) for free, and it is also the default in the signup flow.

You can download a compiled windows installer, that will either install or update ManuScrape to the desired version. The latest .exe installer can be found [here](https://github.com/nikobojs/manuscrape_electron/releases).
<br />
<br />

## Bug reports / feature requests
After the launch of v1.0.0, we intend to use GitHub Issues for all development tasks. If you experience bugs or need features added or refactored, please [submit an issue](https://github.com/nikobojs/manuscrape_electron/issues), preferably in english.
<br />
<br />

## Contribute to the code
You are most welcome to contribute to the project in any way. Except donations. For now.

#### TL;DR:
Clone repositories, look for TODO-comments, make improvement, create feature branch (naming doesn't matter), commit, create PR, and done! The PR will be reviewed by the project maintainers.
<br />

#### Repository overview:
This repo is an Electron app tested continuously on Windows 11 and a couple Linux distributions. The app provides some client-side native tools that talks with the api of the online backend app. [Here is the backend repo](https://github.com/nikobojs/manuscrape_nuxt). These to repositories follows compatability with git tags (eg. `v0.9.2` client works with `v0.9.2` api).
<br />

#### Git conventions:
Not strict in any way. We'll always figure it out so do your stuff the way you think works best. Pull requests (into "unstable" branch) on feature branches will be reviewed and merged by the current admins of the project.
<br />

#### Setup on Linux or Mac:
1. Install Electron repository:
	1. `git clone https://github.com/nikobojs/manuscrape_electron`
	2. `cd manuscrape_electron`
	3. `npm install`
	4. `npm pyinstall`
	5. `npm pyfreeze`
2. [Install ManuScrape Nuxt repository](https://github.com/nikobojs/manuscrape_nuxt)
5. Start Nuxt app: `cd manuscrape_nuxt && yarn dev`
6. Start Electron app: `cd manuscrape_electron && npm start`

#### Setup on Windows:
_NOTE: Development ennvironment for windows is not actively maintained or tested_
<br />
<br />
It is possible to setup on windows, as the app compiles on windows. However, sometimes the npm scripts does not work on windows.

The tricky part here is `virtualenv` from PyPi, which is the virtual python environment that incapsules a part of the scrollshot feature. `virtualenv` seems inconsistent in what paths it creates on windows on initialization. To compensate for that, there are two replacement npm scripts that might fix the python path bug:

`npm run pyinstall-win` and `npm run pyfreeze-win`

If they don't work, try installing and compiling the python program manually (in virtualenv). You can look at the existing scripts in `package.json` for inspiration. If you know consistent fix, please submit an issue!