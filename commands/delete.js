const { SlashCommandBuilder, CommandInteraction } = require('discord.js');
const { role } = require('../config.json');

module.exports = {
  data: new SlashCommandBuilder()
          .setName("delete")
          .setNameLocalizations({ ko: '삭제' })          
          .setDescription("kaikas인증하기"),
  /**
   * 
   * @param {CommandInteraction} interaction
   */
  async run(interaction) {
    const member = interaction.member;
    member.roles.remove(role);
    await interaction.reply({ content: '역할이 삭제되었습니다.', ephemeral: true });
  }
}