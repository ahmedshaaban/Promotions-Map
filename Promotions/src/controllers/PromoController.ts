import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import container from "../inversify.config";
import _ from "lodash";
const redishost = process.env.REDIS_HOST || "localhost";
const cache = require("express-redis-cache")({host: redishost});

@controller("/promotions")
export class PromoController implements interfaces.Controller {

    @httpGet("/:id", cache.route())
    private show(req: express.Request, res: express.Response, next: express.NextFunction): string {
        const promoMap: Array<any> = container.get("PromoMap");
        return _.find(promoMap, (promo) => promo.id == req.params.id);
    }
}