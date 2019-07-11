import { Middleware, IMiddleware, Req, Res, Next } from "@tsed/common";
import * as fs from "fs";
const bundle = require(`${process.env.VIEW}/build.js`);
const renderer = require("vue-server-renderer").createRenderer({
    template: fs.readFileSync(`${process.env.VIEW}/index.template.html`, 'utf8')
});

@Middleware()
export class RenderFrontMiddleware implements IMiddleware {
    constructor() {
    }

    use(@Req() req: Req, @Res() res: Res, @Next() next: Next) {
        const url = req.url;
        const component = bundle.server();

        if (url.startsWith("/rest")) {
            return next();
        }
        component.$router.push(url);
        renderer.renderToString(component, (err:any, html:any) => {
            res.status(200).end(html);
            next();
        });
    }
}