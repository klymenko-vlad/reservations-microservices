import {SchemaTypes, Types} from "mongoose";
import {Prop, Schema} from "@nestjs/mongoose";

@Schema()
export class AbstractDocument {
    @Prop({type: SchemaTypes.ObjectId})
    _id: Types.ObjectId
}