import pkg from "telegraf";
import msg from "telegraf/filters";

const {Telegraf, Markup} = pkg
const {message} = msg
const token = '7403901557:AAGv2MJM3BmAYv37kHNUw2ylnIk_kMryBdE'
const webAppUrl = 'https://angular-tg-evitemebot-app.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx)=>{
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                'Отзыв',
                webAppUrl + 'feedback'
            ),
        ])
    )
})

bot.on(message('web_app_data'), async(ctx) =>{
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()