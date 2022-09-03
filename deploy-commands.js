const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('give').setDescription('초기정착금 100 ~ 1000 AWD 랜덤지급'),
	new SlashCommandBuilder().setName('rewardinfo').setDescription('내 AWD 보유량보기'),
  new SlashCommandBuilder().setName('rewardrankinglist').setDescription('보유 AWD 랭킹보기'),
]
	.map(command => command.toJSON());

const registCommands = () => {

  const rest = new REST({ version: '10' }).setToken(token);

  rest.put(Routes.applicationCommands(clientId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
};

module.exports = { registCommands };