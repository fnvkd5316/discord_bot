const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { registCommands } = require('./commands/deploy-commands.js');
const { certification } = require('./commands/button-certification.js');


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

    case 'certification': //버튼 만들기
    case '인증':
        const cert = certification();
        await interaction.reply({ content: '아래 버튼을 눌러 인증을 해주세요', components: [cert], ephemeral: true });
      break;

    default:
        await interaction.reply({ content: '없는 명령어 입니다.', ephemeral: true });
      break;
  }
});

client.login(token);