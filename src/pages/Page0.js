import * as YR from "../YR";
import MyData from '../MyData';
import { Tool } from '../YRUtils';
export default class Page0 extends PIXI.Container {
    constructor() {
        super();
        this.name = "Page0";
        this.con = new PIXI.Container();
        this.gp = YR.Easy.CreateJSONGroup(window.resource["Page0"], this.con);
        // this.addChild(this.con);
        // this.gp.p0_a0.visible=false;
        // this.gp.p0_a1.visible=false;
        // this.gp.p0_a2.visible=false;


        // YR.Easy.BType(this.gp.p0_a0,Tool.debounce(()=>
        // {
        //    console.log('doSomthing')
        // },1000));

        // YR.Easy.BType(this.gp.p0_a1,()=>
        // {
        //     console.log('Page1_DoSomething');
        // });

        this.con1 = new PIXI.Container();
        this.addChild(this.con1);
        this.con2 = new PIXI.Container();
        this.addChild(this.con2);
        this.con3 = new PIXI.Container();
        this.addChild(this.con3);
        this.con4 = new PIXI.Container();
        this.addChild(this.con4);


        // let img1 = YR.Easy.CreateSprite('img1.png', 300, 100, 0.5, 0.5, 1, null);
        // this.addChild(img1);

        // let img2 = YR.Easy.CreateSprite('img2.png', 300, 400, 0.5, 0.5, 1, null);
        // this.addChild(img2);

        // let img3 = YR.Easy.CreateSprite('img3.png', 300, 700, 0.5, 0.5, 1, null);
        // this.addChild(img3);

        // let img4 = YR.Easy.CreateSprite('img4.png', 100, 900, 0.5, 0.5, 1, null);
        // this.addChild(img4);
        // let img5 = YR.Easy.CreateSprite('img5.png', 100, 900, 0.5, 0.5, 1, null);
        // this.addChild(img5);
        // let img6 = YR.Easy.CreateSprite('img6.png', 600, 900, 0.5, 0.5, 1, null);
        // this.addChild(img6);
        // let img7 = YR.Easy.CreateSprite('img1.png', 600, 900, 0.5, 0.5, 1, null);
        // this.addChild(img7);

        for(let i=1;i<36;i++)
        {
            let img=YR.Easy.CreateSprite('touch'+i.toString()+'.png',Math.random()*0,Math.random()*0,0.5,0.5,1,null);
            this.addChild(img);
        }

        // setTimeout(()=>
        // {
        //     console.log('removeChild')
        //     this.removeChild(img1);
        //     this.removeChild(img2);
        //     this.removeChild(img3);
        // },2000)
        // setTimeout(()=>
        // {

        //     this.addChild(img1);
        //     this.addChild(img2);
        //     this.addChild(img3);
        // },4000)
    }

    In() {

    }

    Out() {

    }

    resize() {

    }
}