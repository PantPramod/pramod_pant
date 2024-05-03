import { useEffect } from "react";

const BuBbleShooter = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    const canvasWidth = (canvas.width = window.innerWidth - 20);
    const canvasHeight = (canvas.height = window.innerHeight - 20);

    let score = 0;
    const keys = {};

    class PlayerGenerator {
      constructor(x, y, width, height, color = "blue") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
      }
      update() {
        if (keys["ArrowLeft"]) {
          if (this.x > 0) this.x -= 10; // Move left
        }

        if (keys["ArrowRight"]) {
          if (this.x + this.width < canvasWidth) this.x += 10; // Move right
        }
      }
    }

    const player = new PlayerGenerator(10, 560, 100, 10);

    const Bullets = [];

    class GenerateBullet {
      constructor() {
        this.x = player.x + player.width / 2;
        this.y = player.y;
        this.radius = 10;
      }
      draw() {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "red";
      }

      fire() {
        this.y -= 20;
      }
    }

    const enemies = [];

    class GenerateEnemies {
      constructor() {
        this.x = Math.random() * (window.innerWidth - 20 - 50);
        this.y = -50;
        this.radius = 50;
        this.dx = Math.random();
        this.dy = Math.random();
        this.color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = this.color;
      }

      drop() {
        this.x += this.dx;
        this.y += 4;
      }
    }

    function enemyGroup() {
      if (enemies.length < 5) {
        enemies.push(new GenerateEnemies());
      }
    }

    function gameLoop() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      player.draw();
      player.update();

      Bullets.forEach((object) => {
        object.draw();
        object.fire();
      });

      enemies.forEach((enemy) => {
        enemy.draw();
        enemy.drop();
      });
      distroyBullets();
      distroyEnemy();
      enemyGroup();

      detectCollisions();
      ctx.font = "20px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(`Score: ${score}`, 10, 20);
      requestAnimationFrame(gameLoop);
    }

    gameLoop();

    document.addEventListener("keydown", (event) => {
      keys[event.key] = true;

      if (event.keyCode === 32) {
        Bullets.push(new GenerateBullet());
      }
    });

    document.addEventListener("keyup", (event) => {
      keys[event.key] = false;
    });

    function distroyBullets() {
      for (let i = 0; i < Bullets.length; i++) {
        if (Bullets[i].y < 10) {
          Bullets.splice(i, 1);
        }
      }
    }

    function distroyEnemy() {
      for (let i = 0; i < enemies.length; i++) {
        if (
          enemies[i].x - enemies[i].radius > canvasWidth ||
          enemies[i].y - enemies[i].radius > canvasHeight
        ) {
          enemies.splice(i, 1);
          score -= 5;
        }
      }
    }

    function detectCollisions() {
      for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
        for (let j = 0; j < Bullets.length; j++) {
          const bullet = Bullets[j];
          const distanceX = enemy.x - bullet.x;
          const distanceY = enemy.y - bullet.y;
          const distanceSquared = distanceX * distanceX + distanceY * distanceY;
          const sumRadiiSquared =
            (enemy.radius + bullet.radius) * (enemy.radius + bullet.radius);
          if (distanceSquared <= sumRadiiSquared) {
            enemies.splice(i, 1);
            Bullets.splice(j, 1);
            // Collision detected
            score += 10;
          }
        }
      }
    }
  }, []);
  return (
    <div>
      <canvas id="canvas1"></canvas>
    </div>
  );
};

export default BuBbleShooter;
