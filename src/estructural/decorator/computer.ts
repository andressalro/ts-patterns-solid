export class Computer {
    boot(): void {
        console.log("Computer is booting");
    }

    shutDown(): void {
        console.log("Computer is shutting down");
    }

    display(): void {
        console.log("Displaying content in one screen");
    }

    print(): void {
        console.log("No printer found");
    }

    renderVideo(): void {
        console.log("Cannot render video without a dedicated graphics card");
    }
}