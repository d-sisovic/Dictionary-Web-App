import { IFreeDictionaryLicense } from "./free-dictionary-license.model";

export interface IFreeDictionaryPhonetic {
  text: string;
  audio?: string;
  sourceUrl?: string;
  license?: IFreeDictionaryLicense;
}
