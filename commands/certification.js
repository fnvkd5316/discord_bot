const { SlashCommandBuilder, CommandInteraction } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const  fetch  =  ( ... args )  =>  import ( 'node-fetch' ) . then ( ( { default : fetch } )  =>  fetch ( ... args ) ) ;
const { role } = require('../config.json');

module.exports = {
  data: new SlashCommandBuilder()
          .setName("certification")
          .setNameLocalizations({ ko: '인증' })
          .setDescription("kaikas인증하기"),
  /**
   * 
   * @param {CommandInteraction} interaction
   */
  async run(interaction) {
    
    // const member = interaction.member;
    // member.roles.add(role);

    const cert = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('primary')
                .setLabel("Let's verify!")
                .setStyle(ButtonStyle.Primary),
            );

    await interaction.reply({ content: '아래 버튼을 눌러 인증을 해주세요', components: [cert], ephemeral: true });
  }
};