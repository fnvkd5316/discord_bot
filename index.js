const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { registCommands } = require('./deploy-commands.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

registCommands();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {

    case 'give':
      await interaction.reply({ content: 'give 발동', ephemeral: true });
      break;

    case 'rewardinfo':
      await interaction.reply({ content: 'rewardInfo 발동', ephemeral: true });
      break;  
    case 'rewardrankinglist':
      await interaction.reply({ content: 'rewardRankingList 발동', ephemeral: true });
      break;

    default:
        await interaction.reply({ content: '없는 명령어 입니다.', ephemeral: true });
      break;
  }
});

client.login(token);