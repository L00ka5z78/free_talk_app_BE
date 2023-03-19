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
exports.currUser = exports.signOutUser = exports.signInUser = exports.signUpUser = void 0;
const config_1 = __importDefault(require("../config/config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user-model");
const common_1 = require("../common");
const signUpUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_model_1.User.findOne({ email });
    if (user)
        return next(new Error('User already exists'));
    const newUser = new user_model_1.User({
        email,
        password,
    });
    yield newUser.save();
    //start cookie session
    req.session = {
        jwt: jsonwebtoken_1.default.sign({ email, userId: newUser._id }, config_1.default.jsonWebToken.JWT_KEY),
    };
    res.status(201).send(newUser);
});
exports.signUpUser = signUpUser;
const signInUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_model_1.User.findOne({ email });
    if (!user)
        return next(new Error('Wrong credentials'));
    //check if password match
    const isEqual = yield common_1.authenticationService.comparePassword(user.password, password);
    if (!isEqual)
        return next(new Error('Wrong credentials'));
    //generate token
    const token = jsonwebtoken_1.default.sign({ email, userId: user._id }, config_1.default.jsonWebToken.JWT_KEY);
    //cokkie session start
    req.session = { jwt: token };
    res.status(200).send(user);
});
exports.signInUser = signInUser;
const signOutUser = (req, res, next) => {
    req.session = null;
    res.send({});
};
exports.signOutUser = signOutUser;
const currUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({ currentUser: req.currentUser });
});
exports.currUser = currUser;
