import mongoose, { Document, Schema, Types } from "mongoose";
import { DragoInfo } from "../interfaces/DragoInfo";

export interface DragoDocument extends Omit<DragoInfo, "_id">, Document {
  _id: Types.ObjectId;
}

const DragoSchema: Schema = new Schema<DragoDocument>(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    lair: {
      status: { type: Number, required: true },
      joinDate: { type: Date, required: true },
      lairId: { type: String, required: true },
      leaveDate: { type: Date, required: false },
    },
    rent: {
      status: { type: String, required: true },
      expireDate: { type: Date, required: true },
      from: { type: String, required: true },
      profitShareRatio: { type: Number, required: true },
      startDate: { type: Date, required: true },
      stats: [
        {
          currentDSA: { type: Number, required: true },
          currentGathering: { type: Number, required: true },
          currentProfit: { type: Number, required: true },
          totalRental: { type: Number, required: true },
          totalDSA: { type: Number, required: true },
          totalGathering: { type: Number, required: true },
          totalProfit: { type: Number, required: true },
          unclaimedProfit: { type: Number, required: true },
        },
      ],
      to: { type: String, required: true },
    },
    filter: {
      parts: [
        {
          legendary: { type: Number, required: true },
          fire: { type: Number, required: true },
          aqua: { type: Number, required: true },
          light: { type: Number, required: true },
          terra: { type: Number, required: true },
          dark: { type: Number, required: true },
        },
      ],
      attr: [
        {
          horn: { type: Number, required: true },
          eye: { type: Number, required: true },
          head: { type: Number, required: true },
          body: { type: Number, required: true },
          wing: { type: Number, required: true },
          tail: { type: Number, required: true },
        },
      ],
      view: { type: Number, required: true },
      heart: { type: Number, required: true },
      stage: { type: Number, required: true },
      genesis: { type: Boolean, required: true },
    },
    network: { type: Number, required: true },
    status: { type: Number, required: true },
    breed: { type: Number, required: true },
    fusion: { type: Number, required: true },
    block: { type: Number, required: true },
    parents: {
      0: { type: Number, required: true },
      1: { type: Number, required: true },
    },
    level: { type: Number, required: true },
    xp: { type: Number, required: true },
    tokenId: { type: Number, required: true },
    owner: { type: String, required: true },
    grade: { type: Number, required: true },
    dragoImageURL: { type: String, required: true },
  },
  {
    collection: "dragoDataPerWalletAddress",
    timestamps: true, // Automatically manage createdAt and updatedAt fields
    toJSON: {
      transform(doc, ret) {
        delete ret.datas; // datas is part of orignal json output of drago in db
      },
    },
  }
);

const DragoModel = mongoose.model<DragoDocument>("DragoModel", DragoSchema);
export { DragoModel };
