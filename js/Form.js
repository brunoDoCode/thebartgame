class Form {
    constructor(){
        this.input = createInput("").attribute("placeholder", "Coloque seu nome")
        this.playButton = createButton("Jogar") //se quiser pode mudar
        this.titleImg =  createImg("/assets/BY BRUNO AND LARISSA.png")//arrume uma logo
        this.greeting = createElement("h2")
    }

    setElementsPosition(){
        this.titleImg.position(width/2-410, 100);
        this.input.position(width/2 - 110, height /2 - 20);
        this.playButton.position(width/2-90, height /2 - 90);
        this.greeting.position(width/2-300, height/2 -100);
    }

    setElementsStyle(){
        this.titleImg.class("gameTitle")
        this.input.class("customInput")
        this.playButton.class("customButton")
        this.greeting.class("greeting")
    }

    hide(){
        this.greeting.hide()
        this.playButton.hide()
        this.input.hide()  
    }

    display(){
        this.setElementsPosition();
        this.setElementsStyle();

    }
}