export type context = {
  beginPath: () => void;
  moveTo: (arg0: any, arg1: any) => void;
  lineTo: (arg0: any, arg1: any) => void;
  closePath: () => void;
  stroke: () => void;
  strokeText: (arg0: string, arg1: number, arg2: number) => void; fillStyle: string; 
  fillText: (arg0: string, arg1: number, arg2: number) => void;
  strokeRect: (x:number, y:number, width:number, height:number) => void;

  canvas: { width: number; }; 
  font: string; 
  textAlign: string; 
  lineWidth: number; 
  strokeStyle: string; 
};
