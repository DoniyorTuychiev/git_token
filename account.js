//classni module packege file sifatida index file ichida foydalanish




const moment = require('moment');




class Account {

    #amount;

    #account_id; 




    constructor(name, amount, account_id){

        this.name = name;

        this.#amount = amount;

        this.#account_id = account_id;

    }




    tellMeBalance(){

        console.log(`Sizning hisobingizdagi qoldiq:${this.#amount} $`);

        return this.#amount

    }




    withdrawMoney(amount) {

        if(this.#amount > amount){

            this.#amount = this.#amount - amount;

            console.log(`Hisobdan ${amount} $ yechildi va qoldiq ${this.#amount} $`);

        }else{

            console.log(`Sizning hisobingizda yetarli mablag mavjud emas. Hozirgi hisobingiz: ${this.#amount} $`);

        }

    }




    makeDeposit(amount){

        this.#amount = this.#amount + amount;

        console.log(`Sizning hisobingiz toldirildi, hisobingiz ${this.#amount} $ tashkil qiladi`);

    }




    giveMeDetalis(){

        console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount} $ ga teng!`);

        console.log(`Sizning hisob raqamingiz: ${this.#account_id}`);

    }




    static telMeAboutClass(){

        console.log('Bu class accountlarni yasash uchun hizmat qiladi!');

    }




    static telMeTime(){

        console.log(`Hozirgi vaqt${moment().format('YYYY MM DD HH:mm:ss')}`);

    }




}




module.exports = Account; //module.exports orqali biz yaratgan account module fileni index filelida chaqirishga yordam beradi