"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRoute_1 = __importDefault(require("./routes/todoRoute"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const db_connect_1 = __importDefault(require("./config/db-connect"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
(0, db_connect_1.default)();
app.use("/todo", todoRoute_1.default);
app.listen(port, () => {
    console.log(`Listen on port: ${port}`);
});
exports.default = app;
