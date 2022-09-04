const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const certification = () => {
  console.log("인증 버튼 만들기 들어옴");
  
  const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('primary')
        .setLabel("Let's verify!")
        .setStyle(ButtonStyle.Primary),
  );

  return row;
};

module.exports = { certification };
