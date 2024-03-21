import { EmailOptions } from "./EmailOptions"

export type Emlifier = {
  get options(): EmailOptions;
  toString: () => string;
  download: () => void;
}