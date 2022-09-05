const { SlashCommandBuilder, CommandInteraction } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName("rewardinfo")
          .setDescription("내 AWD 보유량보기"),
  /**
   * 
   * @param {CommandInteraction} interaction
   */
  async run(interaction) {
    await interaction.reply({ content: 'rewardinfo 발동', ephemeral: true });
  }
}