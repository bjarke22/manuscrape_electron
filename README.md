# ManuScrape Windows App

ManuScrape is a solution made for managing large amounts of observations, that consist of images mapped to customized parameters. 
<br />
<br />
The solution provides a set of tools to collect, edit, enrich and export observations.
<br />
<br />
There are two main actors: the *project manager* and the *collaborator*. 
<br />
<br />


## Basic feature overview:

*Project managers* can setup projects using the web app: 
<br />
*(COMMENT: WEB APP IS A NEW WORD HERE, WOULD IT MAKE SENSE WITH A LINK TO ANOTHER REPO? OR IS IT THIS ONE? IS THERE A PRECISE WORD FOR REFERENCING THE "WINDOWS APP" OR THE "NUXT" APP OR MAYBE JUST "THIS SOLUTION"? IN THAT CASE IT MIGHT BE BETTER... BUT - IT MIGHT ALSO BE COMPLETELY FINE IF IT MAKES GOOD SENSE WHEN YOU MAKE USE OF THE SOLUTION. OR... IF BOTH WEB APP AND NATIVE APP IS WITHIN THIS GIT REPO, MAYBE IT'S JUST FINE AS IT IS?? SINCE I DON'T HAVE THE SLIGHTEST IDEA OF THE ACTUAL SOLUTION(s) I AM NOT ABLE TO DECIDE)*

  1. Enter project name
  2. Define observation parameters
  3. Invite collaborators by email

*Collaborators* can then submit observations (using native app): 
<br />
*(COMMENT: SAME THING - IS IT THIS GIT REPO? IS IT ANOTHER REPO? SHOULD A LINK BE ADDED? CONSIDER IF A MORE PRECISE REFERENCE TO AN APP NAME, GIT-REPO-NAME, OR "NATIVE WINDOWS APP", OR MAYBE JUST "OS-NATIVE APP" WOULD BE MORE PRECISE? )*

  1. Capture image (using smart tools or file upload) *(COMMENT: Is "Smart Tools" a word that makes sense when you use the solution? If not, "solution-provided tools" might be better")*
  2. Edit image
  3. Enter observation parameter values
  4. Attach extra files if any
  5. Submit observation

Whether you're a collaborator or project owner isn't bound to your ManuScrape user, but to your permission role in the specific project.

COMMENT: I (MIGHT) SUGGEST THIS SENTENCE INSTEAD:

Your ManuScrape user's permissions can be granted per project, which means that a ManuScrape user can have the *project manager* permission role in certain projects, while having the *collaborator* permission role in other projects.

The project manager can export the entire project into to different formats, including (COMMENT:WHATTYPEOF??)spreadsheets and zip files(COMMENT:FOLDERS?). Right now the export features are optimized to deliver formats that are easy to import into [NVivo 14](https://lumivero.com/products/nvivo/).
<br />
<br />

## Installation on Windows
Before you start installing, you need to decide where you want to put your data. As of now, you can temporarily use [manuscrape.org](https://manuscrape.org) for free, which is also the default option in the signup flow.

You can download a compiled windows installer, that will either install ManuScrape, or update ManuScrape to the desired version. The latest .exe installer can be found [here](https://github.com/nikobojs/manuscrape_electron/releases).
<br />
<br />

## Bug reports / Feature requests
After the launch of v1.0.0, we intend to use GitHub Issues for all development tasks. If you experience bugs, or need features added or refactored, please [submit an issue](https://github.com/nikobojs/manuscrape_electron/issues), preferably in english.
<br />
<br />

## Contribute to the code
You are more than welcome to contribute to the project in any way (see Bug reports / Feature requests). Donations are not a possibility for now. (COMMENT: CHANGED THIS A BIT, BUT CONSIDER REMOVING "DONATIONS" PART COMPLETELY IF IT'S NOT RELEVANT..!)

#### TL;DR:
Clone repositories, look for TODO-comments, make improvement, create feature branch, commit, create PR, and done! The PR will be reviewed by the project maintainers.
<br />

#### Repository overview:
This repo is an Electron app tested on Windows 11 and a couple Linux distributions. The app provides some client-side native tools, that talks with the api of the online backend app. [Here is the backend repo](https://github.com/nikobojs/manuscrape_nuxt). These two repositories follows compatability with git tags (eg. `v0.9.2` client works with `v0.9.2` api).
<br />

#### Git conventions:
Not strict in any way for now. Make your contibutions the way you think is best. Pull requests (into "unstable" branch) on feature branches will be reviewed/merged by the current admins of the project.
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
It's possible to set up a development environment on windows. However, it is not actively tested on windows, and there is a known issue with the npm scripts sometimes not working in windows environments.

The tricky part here is `virtualenv` from PyPi, which is the virtual python environment that incapsules a part of the scrollshot feature. `virtualenv` seems inconsistent in what paths it creates on windows on initialization. To compensate for that, there are two replacement npm scripts that might fix the python path bug:

`npm run pyinstall-win` and `npm run pyfreeze-win`

If they don't work, try installing and compiling the python program manually (in virtualenv). You can look at the existing scripts in `package.json` for inspiration. If you know of a consistent fix, please submit an issue!