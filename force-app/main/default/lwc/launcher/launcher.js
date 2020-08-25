import { LightningElement } from 'lwc';

export default class Launcher extends LightningElement {
    openHeroku(){
        window.open("https://www.heroku.com/", "_blank")
    }
}