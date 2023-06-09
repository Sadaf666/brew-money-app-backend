"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberSchema = exports.PhoneNumber = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let PhoneNumber = class PhoneNumber {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Label for phone number.' }),
    (0, mongoose_1.Prop)({ default: null, trim: true, lowercase: true }),
    __metadata("design:type", String)
], PhoneNumber.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country code for phone number.' }),
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], PhoneNumber.prototype, "country_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number for phone number.' }),
    (0, mongoose_1.Prop)({ default: true, trim: true }),
    __metadata("design:type", String)
], PhoneNumber.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full number with country code.' }),
    (0, mongoose_1.Prop)({ default: true, trim: true }),
    __metadata("design:type", String)
], PhoneNumber.prototype, "full_number", void 0);
PhoneNumber = __decorate([
    (0, mongoose_1.Schema)()
], PhoneNumber);
exports.PhoneNumber = PhoneNumber;
exports.PhoneNumberSchema = mongoose_1.SchemaFactory.createForClass(PhoneNumber);
//# sourceMappingURL=phone-number.schema.js.map