"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniq = void 0;
var url_1 = __importDefault(require("./url"));
var crypto_1 = require("crypto");
function uniq(size) {
    if (size === void 0) { size = 12; }
    var id = "";
    var bytes = crypto_1.randomBytes(size);
    while (size--)
        id += url_1.default[bytes[size] & 63];
    return id;
}
exports.uniq = uniq;
;
