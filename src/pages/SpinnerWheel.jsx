import React, { useEffect } from "react";
import circle2 from '../assets/circle2.png'
import hook2 from '../assets/hook.png'
const SpinnerWheel = () => {
let count = 0  
  useEffect(() => {
    
    if(count===0){
    
      (async () => {
      
        const app = new PIXI.Application();
        await app.init({ backgroundAlpha: 0, resizeTo: window });
  
        document.getElementById('spinner').appendChild(app.canvas);
  
        const bgTexture = await PIXI.Assets.load(
          "https://media.istockphoto.com/id/1158274915/vector/grass-seamless-realistic-texture-green-lawn-field-or-meadow-vector-background-summer-or.jpg?s=612x612&w=0&k=20&c=7AAqciofj43K5kmQxxOBCO1Rj0YUuFZdcTuO9XwZOsc="
        );
        const bg = new PIXI.Sprite(bgTexture);
  
        bg.x = 0;
        bg.y = 0;
        bg.width = app.screen.width;
        bg.height = app.screen.height;
  
        app.stage.addChild(bg);
  
        const RADIUS = 200;
        const circleTexture = await PIXI.Assets.load(circle2);
  
        const circle = new PIXI.Sprite(circleTexture);
  
        circle.anchor.set(0.5);
  
        circle.x = app.screen.width / 2;
        circle.y = app.screen.height / 2;
  
        app.stage.addChild(circle);
  
        const hookTexture = await PIXI.Assets.load(hook2);
  
        const hook = new PIXI.Sprite(hookTexture);
        hook.cursor = "pointer";
        hook.anchor.set(0.5);
        hook.x = app.screen.width / 2;
        hook.y = app.screen.height / 2;
  
        hook.scale = 1.2;
  
        app.stage.addChild(hook);
  
        let speed = 0.0;
        let rotation = 0;
        let isRotating = false;
        hook.on("pointerdown", () => {
          isRotating = true;
          circle.speed = 0.1;
          rotation = getRandomInt(1500, 2000);
        });
  
        hook.eventMode = "static";
        let elapsed = 0.0;
  
        app.ticker.add((ticker) => {
          console.log(circle.rotation % 360);
  
          if (isRotating) {
            circle.rotation += 0.1;
            if (circle.rotation >= degToRad(rotation)) {
              isRotating = false;
              let ans = 0;
              if (rotation % 360 > 0 && rotation % 360 < 45) {
                ans = 8;
              } else if (rotation % 360 > 45 && rotation % 360 < 90) {
                ans = 7;
              } else if (rotation % 360 > 90 && rotation % 360 < 135) {
                ans = 6;
              } else if (rotation % 360 > 135 && rotation % 360 < 180) {
                ans = 5;
              } else if (rotation % 360 > 180 && rotation % 360 < 225) {
                ans = 4;
              } else if (rotation % 360 > 225 && rotation % 360 < 270) {
                ans = 3;
              } else if (rotation % 360 > 270 && rotation % 360 < 315) {
                ans = 2;
              } else if (rotation % 360 > 315 && rotation % 360 < 360) {
                ans = 1;
              }
              createElement(ans);
              circle.rotation = degToRad(rotation % 360);
              console.log(rotation, ans);
            }
          }
        });
  
        function degToRad(degrees) {
          return degrees * (Math.PI / 180);
        }
        function radToDeg(radian) {
          return radian * (180 / Math.PI);
        }
  
        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
  
        function createElement(value) {
          const div = document.createElement("div");
          div.classList.add("popup");
          div.id = "popup";
          div.innerHTML = `You get ${value}`;
          document.body.appendChild(div);
  
          const button = document.createElement("button");
          button.classList.add("button");
  
          button.textContent = "OK";
          button.classList.add("btn");
          console.log(button);
          button.addEventListener("click", () => {
            const popup = document.getElementById("popup");
            popup.remove();
          });
          div.appendChild(button);
        }
      })();
      count++
    }
  
  }, []);
  return <div id="spinner"></div>;
};

export default SpinnerWheel;
