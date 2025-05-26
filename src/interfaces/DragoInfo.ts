import { Types } from "mongoose";

export interface DragoLair {
  status: number;
  joinDate: Date;
  lairId: string;
  leaveDate?: Date;
}

export interface DragoRentStats {
  currentDSA: number;
  currentGathering: number;
  currentProfit: number;
  totalRental: number;
  totalDSA: number;
  totalGathering: number;
  totalProfit: number;
  unclaimedProfit: number;
}

export interface DragoRent {
  status: string;
  expireDate: Date;
  from: string;
  profitShareRatio: number;
  startDate: Date;
  stats: DragoRentStats[];
  to: string;
}

export interface DragoParts {
  legendary: number;
  fire: number;
  aqua: number;
  light: number;
  terra: number;
  dark: number;
}

export interface DragoAttributes {
  horn: number;
  eye: number;
  head: number;
  body: number;
  wing: number;
  tail: number;
}

export interface DragoFilter {
  parts: DragoParts[];
  attr: DragoAttributes[];
  view: number;
  heart: number;
  stage: number;
  genesis: boolean;
}

export interface DragoParents {
  0: number;
  1: number;
}

export interface DragoInfo {
  _id: Types.ObjectId; // because json data has _id attribute
  lair: DragoLair[];
  rent: DragoRent[];
  filter: DragoFilter[];
  network: number;
  status: number;
  breed: number;
  fusion: number;
  block: number;
  parents: DragoParents[];
  level: number;
  xp: number;
  tokenId: number;
  owner: string;
  grade: number;
  dragoImageURL: string;
}
