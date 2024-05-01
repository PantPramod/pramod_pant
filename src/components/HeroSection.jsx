import { useEffect } from "react"
import Cartoon from "./Cartoon"

const HeroSection = () => {
    useEffect(()=>{
        const canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        
        
        let gameRectangles = []
        let gameLines = []
        let gameCircles = []
        canvas.width = window.innerWidth-20
        canvas.height = window.innerHeight-10
        
        
        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
            gameRectangles.forEach(object => {
                object.draw();
            });
        
            gameLines.forEach(object => {
                object.draw()
            })
        
            gameCircles.forEach(object => {
                object.draw()
                object.randomMovement()
            })
        
            requestAnimationFrame(gameLoop);
        }
        
        gameLoop();
        
        
        class GameRectangle {
            constructor(x, y, width, height, color) {
                this.x = x
                this.y = y
                this.width = width
                this.height = height
                this.color = color
        
            }
        
            draw() {
                ctx.beginPath();
                ctx.rect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }
        
        
        
        class GameLine {
            constructor(x1, y1, x2, y2) {
                this.x1 = x1
                this.y1 = y1
                this.x2 = x2
                this.y2 = y2
            }
        
            draw() {
                ctx.beginPath(); // Start a new path
                ctx.moveTo(this.x1, this.y1); // Move the pen to (30, 50)
                ctx.lineTo(this.x2, this.y2); // Draw a line to (150, 100)
                ctx.stroke(); // Render the path
            }
        }
        
        class GameCircle {
            constructor(x, y, r, color, speed = 1) {
                this.x = x
                this.y = y
                this.r = r
                this.color = color
                this.isRight = true
                this.isBottom = true
                this.speed = speed
            }
        
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = this.color;
                // ctx.stroke()
        
            }
        
            randomMovement() {
                if (this.isRight) {
                    this.x += this.speed
                    if (this.x + this.r >= canvas.width) {
                        this.isRight = false
                    }
                } else {
                    this.x -= this.speed
                    if (this.x - this.r <= 0) {
                        this.isRight = true
                    }
                }
        
                if (this.isBottom) {
        
                    this.y += this.speed
        
                    if (this.y + this.r >= canvas.height) {
                        this.isBottom = false
                    }
        
        
                } else {
                    this.y -= this.speed
                    if (this.y - this.r <= 0) {
                        this.isBottom = true
                    }
                }
        
        
        
            }
        }
        
        // const myRect = new GameRectangle(0, 0, 50, 50, "rgba(155, 52, 52, 0.5)")
        
        // gameRectangles.push(myRect)
        
        
        const myCircle = new GameCircle(200, 300, 50, "rgba(155, 52, 52, 0.5)")
        gameCircles.push(myCircle)
        
        for (let i = 0; i < 75; i++) {
            gameCircles.push(new GameCircle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random()*50, `rgba(${Math.random()*153}, ${Math.random()*153}, ${Math.random()*153}, ${Math.random()})`, Math.random()*5))
        }
        
        // for (let i = 1; i < 4; i++) {
        //     gameLines.push(new GameLine(100 * i, 0, 100 * i, 600))
        // }
        // for (let i = 1; i < 6; i++) {
        //     gameLines.push(new GameLine(0, 100 * i, 400, 100 * i))
        // }
    },[])
    return (
        <>
        <canvas id="canvas"></canvas>
            <div className="min-h-screen flex flex-col sm:flex-row relative">
                <div className=" w-full sm:w-[70%] flex items-center min-h-screen">
                    <div className="ml-[10%]  sm:ml-[15%] mr-[10%] sm:mr-[40%]  w-auto ">
                        <h1 className="text-[#4731d4f8] font-bold  text-5xl sm:text-6xl "> Pramod Pant </h1>
                        <h2 className="text-5xl sm:text-6xl font-bold text-[#4731d4] mt-2 ">MERN Stack Developer</h2>
                        <p className="text-[#4731d4fa] font-semibold mt-5">I like to craft solid and scalable products with great user experiences.</p>
                    </div>
                </div>
                <div className="bg-[#bbd431e5] w-full sm:w-[30%] min-h-[50vh] flex justify-center items-center">
                    <div className="w-[80%]  sm:w-[30%] sm:min-h-[30%] p-4 rounded-lg sm:absolute sm:left-[70%] sm:top-[50%]  border-[#010201] sm:-translate-y-1/2 sm:-translate-x-1/2 border-2">
                        <Cartoon />
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection
