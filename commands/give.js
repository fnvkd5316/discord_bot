const { SlashCommandBuilder, CommandInteraction } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName("give")
          .setDescription("초기정착금 100 ~ 1000 AWD 랜덤지급"),    
  /**
   * 
   * @param {CommandInteraction} interaction
   */
  async run(interaction) {
    await interaction.reply({ content: 'give 발동', ephemeral: true });
  }
};