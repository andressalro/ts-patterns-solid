import { Computer } from "./computer";

export class ServerComputer extends Computer {
    boot() {
        console.log("Booting server...");
    }

    shutDown() {
        console.log("Server is shutting down");
    }
}