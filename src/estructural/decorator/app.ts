import { ComputerWithDedicatedGPU } from "./computer-with-dedicated-gpu";
import { ComputerWithPrinterDecorator } from "./computer-with-printer-decorator";
import { ServerComputer } from "./server-computer";

let server = new ServerComputer();
let serverWithPrinter = new ComputerWithPrinterDecorator(server);
let serverWithPrinterAndDedicatedGPU = new ComputerWithDedicatedGPU(serverWithPrinter);

serverWithPrinterAndDedicatedGPU.print();
serverWithPrinterAndDedicatedGPU.renderVideo();