"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argon2_1 = __importDefault(require("argon2"));
function validateLogin(user, password) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!user) {
            return {
                errors: [
                    {
                        field: "usernameOrEmail",
                        message: "Username does not exist",
                    },
                ],
            };
        }
        const validPassword = yield argon2_1.default.verify(user.password, password);
        if (!validPassword) {
            return {
                errors: [
                    {
                        field: "Password",
                        message: "Incorrect password",
                    },
                ],
            };
        }
        return false;
    });
}
exports.default = validateLogin;
//# sourceMappingURL=validateLogin.js.map