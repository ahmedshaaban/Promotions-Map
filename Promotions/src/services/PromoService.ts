import * as _ from "lodash";
import container from "../inversify.config";
import { CronJob } from "cron";
import fs from "fs";
import path from "path";
const csvjson = require("csvjson");
export const startPromoPulling = function () {
    new CronJob("*/1 * * * *", function () {
        const data = fs.readFileSync(path.join(__dirname, "../../store/ids.csv"), { encoding: "utf8" });
        const conv = csvjson.toObject(data, {
            headers: "id,price,expire_date",

        });
        container.bind("PromoMap").toConstantValue(conv);
    }, undefined, true, "Africa/Cairo", undefined, true);
};