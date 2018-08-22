import { PointF2D } from "./PointF2D";

export class Matrix2D {
    private matrix: number[][];

    constructor() {
        this.matrix = new Array(2);
        for (let i: number = 0; i < 2; i++) {
            this.matrix[i] = new Array(2);
        }
    }

    public static getRotationMatrix(angle: number): Matrix2D {
        const rotation: Matrix2D = new Matrix2D();
        const cos: number = <number>Math.cos(angle);
        const sin: number = <number>Math.sin(angle);
        rotation[0][0] = cos;
        rotation[0][1] = -sin;
        rotation[1][0] = sin;
        rotation[1][1] = cos;
        return rotation;
    }

    public scalarMultiplication(scalar: number): void {
        for (let i: number = 0; i < 2; i++) {
            for (let j: number = 0; j < 2; j++) {
                this.matrix[i][j] *= scalar;
            }
        }
    }

    public getTransposeMatrix(): Matrix2D {
        const transpose: Matrix2D = new Matrix2D();
        for (let i: number = 0; i < 2; i++) {
            for (let j: number = 0; j < 2; j++) {
                transpose[i][j] = this.matrix[j][i];
            }
        }
        return transpose;
    }

    public vectorMultiplication(point: PointF2D): PointF2D {
        const result: PointF2D = new PointF2D();
        result.x = point.x * this.matrix[0][0] + point.y * this.matrix[0][1];
        result.y = point.x * this.matrix[1][0] + point.y * this.matrix[1][1];
        return result;
    }

    // public get Matrix(index: number): number[] {
    //     return this.matrix[index];
    // }
    // public set Matrix(index: number, value: number[]): void {
    //     this.matrix[index] = value;
    // }
}
