const TelegramApi = require('node-telegram-bot-api')

const token = '6518613737:AAFhR_0hcLEq76SUszAp03tUuGA_oYVoiSQ'

const bot = new TelegramApi(token, {polling:true})

bot.on('message', async msg => {
    const text =msg.text;
    const chatId =msg.chat.id;
    if (text === '/start') {
        await bot.sendSticker(chatId, 'https://stickerpacks.ru/wp-content/uploads/2023/06/nabor-stikerov-pjoseli-dlja-telegram-1.webp')
        await bot.sendMessage(chatId, `Добро пожаловать ${msg.from.first_name}`);
    }
    if (text === '/go'){
        await bot.sendMessage(chatId, `Куда торопишься ${msg.from.first_name}?`);
        }

})