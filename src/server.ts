import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as http from 'http';

import { IndexApi } from "./api/index";

class Server {

    public app: express.Application;

    constructor() {
        this.app = express();

        this.config();

        this.api();
    }

    private api() {
        const apiRouter = express.Router();

        IndexApi.create(apiRouter);
        this.app.use('/api', apiRouter);
    }

    private config() {
        this.app.set("port", 3000);

        this.app.use(express.static(path.join(__dirname, "public")));

        this.app.set("views", path.join(__dirname, "../views"));
        this.app.set("view engine", "pug");

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

		//catch 404 and forward to error handler
		this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
			err.status = 404;
			next(err);
		});
    }

    public static start() {
        const server = new Server();
        const httpServer = http.createServer(server.app)
        httpServer.listen(3000);
        httpServer.on("listening", () => { console.log('Server started...') });
    }
}

Server.start();