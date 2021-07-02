class Security {

    constructor(){

        this.access1 = createInput("1")
        this.access1.position(2000,200);
        this.access1.style('background', 'white');  
        this.access1.style('width','10px');
        this.access1.style('height','10px');
        this.button1 = createButton('Choose');
        this.button1.position(472,410);
        this.button1.style('background', 'lightblue');    

        this.access2 = createInput("2")
        this.access2.position(2000,355);
        this.access2.style('background', 'white');  
        this.access2.style('width','10px');
        this.access2.style('height','10px');
        this.button2 = createButton('Choose');
        this.button2.position(1070,107);
        this.button2.style('background', 'yellow');

        this.access3 = createInput("3")
        this.access3.position(2000,590);
        this.access3.style('background', 'white');  
        this.access3.style('width','10px');
        this.access3.style('height','10px');
        this.button3 = createButton('Choose');
        this.button3.position(1080,410);
        this.button3.style('background', 'lightpink');

        this.access4 = createInput("4")
        this.access4.position(2000,200);
        this.access4.style('background', 'white');  
        this.access4.style('width','10px');
        this.access4.style('height','10px');
        this.button4 = createButton('Choose');
        this.button4.position(465,108);
        this.button4.style('background', 'lightblue');    

        this.access5 = createInput("5")
        this.access5.position(2000,355);
        this.access5.style('background', 'white');  
        this.access5.style('width','10px');
        this.access5.style('height','10px');
        this.button5 = createButton('Choose');
        this.button5.position(773,400);
        this.button5.style('background', 'yellow');

        this.access6 = createInput("6")
        this.access6.position(2000,590);
        this.access6.style('background', 'white');  
        this.access6.style('width','10px');
        this.access6.style('height','10px');
        this.button6 = createButton('Choose');
        this.button6.position(773,107);
        this.button6.style('background', 'lightpink');   
    }

    display(){
        
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                this.button2.hide();
                this.access2.hide();
                this.button3.hide();
                this.access3.hide();
                this.button4.hide();
                this.access4.hide();
                this.button5.hide();
                this.access5.hide();
                this.button6.hide();
                this.access6.hide();
                count=count+1;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button1.hide();
                this.access1.hide();
                this.button2.hide();
                this.access2.hide();
                this.button3.hide();
                this.access3.hide();
                this.button4.hide();
                this.access4.hide();
                this.button5.hide();
                this.access5.hide();
                this.button6.hide();
                this.access6.hide();
                count=count+2;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button1.hide();
                this.access1.hide();
                this.button2.hide();
                this.access2.hide();
                this.button3.hide();
                this.access3.hide();
                this.button4.hide();
                this.access4.hide();
                this.button5.hide();
                this.access5.hide();
                this.button6.hide();
                this.access6.hide();
                count=count+3;
            }
        });
        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button1.hide();
                this.access1.hide();
                this.button2.hide();
                this.access2.hide();
                this.button3.hide();
                this.access3.hide();
                this.button4.hide();
                this.access4.hide();
                this.button5.hide();
                this.access5.hide();
                this.button6.hide();
                this.access6.hide();
                count=count+4;
            }
        });
        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button1.hide();
                this.access1.hide();
                this.button2.hide();
                this.access2.hide();
                this.button3.hide();
                this.access3.hide();
                this.button4.hide();
                this.access4.hide();
                this.button5.hide();
                this.access5.hide();
                this.button6.hide();
                this.access6.hide();
                count=count+5;
            }
        });
        this.button6.mousePressed(() => {
            if(system.authenticate(accessCode6,this.access6.value())){
                this.button1.hide();
                this.access1.hide();
                this.button2.hide();
                this.access2.hide();
                this.button3.hide();
                this.access3.hide();
                this.button4.hide();
                this.access4.hide();
                this.button5.hide();
                this.access5.hide();
                this.button6.hide();
                this.access6.hide();
                count=count+6;
            }
        });
    }
}