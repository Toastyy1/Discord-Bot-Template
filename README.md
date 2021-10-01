# Discord Bot Template

Contains a complete template build / structure for a Discord Bot (with Slash-Commands)

## New in this version

- Sample (slash) commands
- Fixes / Improvements 

## Prerequisites 

- Latest [Git](https://git-scm.com) version installed
- [Node.js](https://nodejs.org/en/) 16.9.1 or higher
- IDE like **[Visual Studio Code](https://code.visualstudio.com)**

Following npm-packages are required to run this template:

- [discord.js](https://www.npmjs.com/package/discord.js?source=post_page-----7b5fe27cb6fa----------------------)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [@discordjs/rest](https://www.npmjs.com/package/@discordjs/rest)
- [discord-api-types](https://www.npmjs.com/package/discord-api-types)

You can install them all at once. Just execute this command in your project directory via the terminal:

`npm install discord.js dotenv @discordjs/rest discord-api-types`

## Before you start

The best way to use this template is to **not** clone this repo via Git! Just download the code as ZIP file:
<img width="918" alt="Bildschirmfoto 2021-10-01 um 12 25 51" src="https://user-images.githubusercontent.com/81110115/135605433-5c41cf3b-42bc-42f9-8f6f-f6ee8a21bbf7.png">

After that you should delete the `package.json` file and create a new one using the command `npm init`. You should also go to `package-lock.json` and adjust the `name` and `version` attribute to whatever your project is named like and which version it currently has!

**_Important:_**

Open `.gitignore` and remove the `#` in the line with `.env`:

<img width="600" alt="Bildschirmfoto 2021-10-01 um 12 34 38" src="https://user-images.githubusercontent.com/81110115/135606499-532b79ea-29c6-423d-a21a-cf8c8b2e118d.png">

**Do this step before pushing your code to GitHub! Otherwise you upload the `.env` file, containing your bot's token, etc.!**

The last thing you want to do is to fill your `.env` file. In this file, all config vars are stored. You need to add at least your bot's **token**. If you need any more config vars, you can easily add them by entering a new line, typing the name in CAPS and after the `=` you can write down the content (**No quotes needed!**)

**That's it! You're now all set and ready to start coding :)**

## Attributes for "standard" commands

When creating non-slash commands you can specify some **permission attributes** like `guildOnly`. Here's a list of all available attributes:


- `permissionError = 'You are not authorized to execute this command!'` (Type = string)
- `requiredRoles = ["Your custom server role"]` (Type = string (array))
- `permissions = ["ADMINISTRATOR"]` (Type = string (array))
- `minArgs = 0` (Type = int)
- `maxArgs = 1` (Type = int)
- `expectedArgs = '<argument 1> <argument 2>'` (Type = string)
- `guildOnly = true` (Type = boolean)

## Commands vs. Slash-Commands

**Case "standard" command:**

- When creating non-slash-commands, you can delete the following files / lines of code:
  - `createCommands.js`
  - `require('./util/createCommands')();` in `index.js`
  - `sampleSlashCommand.js`
  - `interactionCreate.js`

**Case slash-command:** 

- When creating slash-commands you only have to delete:
  - `messageCreate.js`
  - `sampleCommand.js`
  - `PREFIX` in your `.env` file

## Bugs, erros, improvements

- If you ever encounter any errors or bugs, just open a ticket [here](https://github.com/Toasty65/Discord-Bot-Template/issues)
- If you want to contribute or submit a change, fork this repository and create a [pull request](https://github.com/Toasty65/Discord-Bot-Template/pulls)
