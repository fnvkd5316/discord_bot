const { Client, GatewayIntentBits, EmbedBuilder, ButtonStyle, ApplicationCommandType, ApplicationCommandOptionType, Collection } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { token, clientId, testGuildId, role } = require('./config.json');
const fs = require("fs");

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once('ready', async () => {
  console.log("봇이 준비되었습니다.");
});

client.on('messageCreate', async (message) => {
  const member = message.member;

  if (message.content == "!추가") {
    member.roles.add(role);
  } else if ( message.content == "!삭제" ) {
    member.roles.remove(role);
  }
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.run(interaction);
  } catch(err) {
    console.error(err);
    await interaction.reply({ content: '잘못된 접근입니다.', ephemeral: true });
  }
});

const commandJsonData = [
  ...Array.from(client.commands.values()).map(c => c.data.toJSON())
]

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log("빗금 명령어를 등록중입니다.");
    await rest.put(
      Routes.applicationGuildCommands(clientId, testGuildId), 
      { body: commandJsonData });
    console.log("빗금 명령어 등록 완료했습니다.");
  } catch(err) {
    console.error(err);
  }
})();

client.login(token);