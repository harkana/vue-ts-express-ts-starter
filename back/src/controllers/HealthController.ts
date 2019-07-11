import { Controller, Get } from "@tsed/common";

@Controller("/health")
export class HealthController {
    @Get()
    index() {
        return `The server is up at : ${new Date()}`;
    }
}