# Discord Bot Template

Contains a complete template build / structure for a Discord Bot (with Slash-Commands)

## New in this version

- Corrected some code
- Updated README
- Added example .env file
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

```
npm install discord.js dotenv @discordjs/rest discord-api-types
```

## How to use this template

The fastest way is to clone this repo via [degit](https://www.npmjs.com/package/degit):

At first, install degit
```
npm install -g degit
```

In the next step you can clone this repository with a single command (Make sure you execute this in your target directory):

```
degit Toasty65/Discord-Bot-Template
```

The last step is running

```
npm i
```

And - _like magic_ - the template got cloned into your directory 

**_Important:_**

Open `.gitignore` and remove the `#` in the line with `.env`:

<img width="600" alt="Bildschirmfoto 2021-10-01 um 12 34 38" src="https://user-images.githubusercontent.com/81110115/135606499-532b79ea-29c6-423d-a21a-cf8c8b2e118d.png">

**Do this step before pushing your code to GitHub! Otherwise you upload the `.env` file as well, containing your bot's token, etc.!**

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

- If you want to create **global** slash commands instead of **guild only** ones, head over to `createCommands.js` and make the following changes
```diff
- await rest.put(Routes.applicationGuildCommands(clientId, guildId) 
+ await rest.put(Routes.applicationCommands(clientId))
```

_(You'll also find comments everywhere in this template, explaining which file you need in specific cases)_

## Bugs, erros, improvements

- If you ever encounter any errors or bugs, just open a ticket [here](https://github.com/Toasty65/Discord-Bot-Template/issues)
- If you want to contribute or submit a change, fork this repository and create a [pull request](https://github.com/Toasty65/Discord-Bot-Template/pulls)
