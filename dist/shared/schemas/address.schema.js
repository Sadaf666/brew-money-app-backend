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
exports.AddressSchema = exports.Address = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Address = class Address {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Address line of the user contact.' }),
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Address.prototype, "address_line", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'City of the user contact.' }),
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'State of the user contact.' }),
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Region of the user contact.' }),
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Address.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country of the user contact.' }),
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zip code of the user contact.' }),
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Address.prototype, "zip_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full address of the user contact.' }),
    (0, mongoose_1.Prop)({ default: null, trim: true }),
    __metadata("design:type", String)
], Address.prototype, "full_address", void 0);
Address = __decorate([
    (0, mongoose_1.Schema)()
], Address);
exports.Address = Address;
exports.AddressSchema = mongoose_1.SchemaFactory.createForClass(Address);
//# sourceMappingURL=address.schema.js.map