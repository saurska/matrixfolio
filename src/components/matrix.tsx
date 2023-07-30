import React, { useEffect, useRef } from 'react';

const Matrix = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  class Symbol {
    characters =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    x: number;
    y: number;
    fontSize: number;
    text: string;
    canvasHeight: number;

    constructor(x: number, y: number, fontSize: number, canvasHeight: number) {
      this.x = x;
      this.y = y;
      this.fontSize = fontSize;
      this.text = '';
      this.canvasHeight = canvasHeight;
    }

    draw(context: CanvasRenderingContext2D) {
      this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));

      context.fillStyle = 'green';
      context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
      if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.99) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    }
  }

  class Effect {
    canvasWidth: number;
    canvasHeight: number;
    fontSize: number;
    columns: number;
    symbols: Symbol[];

    constructor(canvasWidth: number, canvasHeight: number) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.fontSize = 13;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.initialize();
      console.log(this.symbols);
    }

    private initialize() {
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
      }
    }
    public resize(width:number,height:number){
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth/13;
        this.symbols = [];
        this.initialize();
    }
  }


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (canvas && ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const effect = new Effect(canvas.width, canvas.height);

      function animate() {
        if (!ctx) return;

        ctx.fillStyle = 'rgba(1,1,0,0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = effect.fontSize + 'px monospace';
        effect.symbols.forEach((symbol) => symbol.draw(ctx));
        requestAnimationFrame(animate);
      }


      animate();
      window.addEventListener('resize',function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        effect.resize(canvas.width,canvas.height);
      })





    }
  }, []);


  return <canvas ref={canvasRef} />;
};

export default Matrix;
