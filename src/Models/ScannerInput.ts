import { boundingBox } from "./BoundingBox";

export type ScannerInput = {
  id: number;
  format: string;
  rawValue: string;
  boundingBox: boundingBox;
  cornerPoints: [
    { x: number, y: number }
  ]

}
