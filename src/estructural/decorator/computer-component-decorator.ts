import { Computer } from "./computer";

export class ComputerComponentDecorator extends Computer {
    constructor(private _computer: Computer) {
        super();
    }

    boot() {
        return this._computer.boot();
    }

    shutDown() {
        return this._computer.shutDown();
    }

    display() {
        return this._computer.display();
    }

    print() {
        return this._computer.print();
    }

    renderVideo() {
        return this._computer.renderVideo();
    }
}