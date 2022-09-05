const { SlashCommandBuilder, CommandInteraction } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName("rewardrankinglist")
          .setDescription("보유 AWD 랭킹보기"),
  /**
   * 
   * @param {CommandInteraction} interaction
   */
  async run(interaction) {
    await interaction.reply({ content: 'rewardrankinglist 발동', ephemeral: true });
  }
}