<p align="center"><img src="https://media.forgecdn.net/avatars/798/822/638160732420962168.png" height="250" alt="Logo"></p>
<h1 align="center">PanPack</h1>
<p align="center"><b><i>A template for the modern modpacker, featuring automatic mod updating, autolinting, build/release scripts, simple setup and more.</i></b></p>
<h1 align="center">
    <a href="https://github.com/ThePansmith/PanPack/blob/main/LICENSE.md"><img src="https://img.shields.io/github/license/ThePansmith/PanPack?style=for-the-badge&logo=github" alt="License"></a>
    <a href="https://discord.com/invite/zwQzqP8b6q"><img src="https://img.shields.io/discord/927050775073534012?style=for-the-badge&logo=discord&color=5865F2&labelColor=grey&label=+" alt="Discord"></a>
</h1>

### Requirements
* This template was written with [Prism Launcher](https://prismlauncher.org/) in mind. Those using other launchers will need to adjust setup instructions as needed to allow their launcher to recognize the template as an instance. Launchers without the ability to set prelaunch commands will need to fetch mods manually (see below).

## Setup
1. Clone repository into an empty `(instancename)\minecraft` folder
2. Copy the contents of `(instancename)\minecraft\.pakku\prism-overrides` into your `(instancename)` folder to have a working [Prism Instance](https://prismlauncher.org/).
2. Fetch the mods by running `$ java -jar pakku.jar fetch`

Don't forget to link to this page in your README so contributors will know how to set up their own instance!

#### I need a Curseforge Key?
Accessing CurseForge requires the CurseForge API key.

The API key can be generated in the CurseForge for Studios(https://console.curseforge.com/) developer console.

 1. Login to the developer console
 2. Go to the "API keys" tab
 3. Copy your API key
 4. Run `$ java -jar pakku.jar credentials set --cf-api-key '(API Key)'` in your `minecraft` folder via your terminal (to get to the folder, use the [cd](https://en.wikipedia.org/wiki/Cd_(command)) command)


### Building and releasing
Before you can run the buildscripts, you will need to go to the repository's [secrets and variables](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets) and add [`CURSEFORGE_TOKEN`](https://support.curseforge.com/en/support/solutions/articles/9000197321-curseforge-upload-api) into secrets and [`CURSEFORGE_ID`](https://github.com/user-attachments/assets/39fc3911-ee6a-4152-a433-be166896d5cd) into variables. Before releasing, go to [release.yml](https://github.com/ThePansmith/PanPack/blob/main/.github/workflows/build-release.yml), and change anything that's commented with "Change this!"

Also, ensure that your pakku.json has the following variables:

```json
    "version": "DEV", // Leave this as dev, it will be replaced when the project is built. Don't include these comments in your actual pakku.json file.
    "release_type": "alpha", // or beta, or release. This one is used to tell curseforge the release type.
```

## Usage
* To initate a release, update `CHANGELOG.MD` with a new version, [Unreleased] can be used as a staging ground for changes.
   * [Unreleased] changes are included in the changelog for builds created from the dev branch.
* Release type, overrides, and otherwise can be set in pakku.json
* Give the workflow read/write permissions

## Credits
- Buildscript modified from [Terrafirmagreg](https://www.curseforge.com/minecraft/modpacks/terrafirmagreg-modern)
