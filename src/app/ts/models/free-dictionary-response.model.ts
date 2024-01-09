import { IFreeDictionaryLicense } from "./free-dictionary-license.model";
import { IFreeDictionaryMeaning } from "./free-dictionary-meaning.model";
import { IFreeDictionaryPhonetic } from "./free-dictionary-phonetic.model";

export interface IFreeDictionaryResponse {
  license: IFreeDictionaryLicense;
  word: string;
  sourceUrls: string[];
  phonetic?: string;
  phonetics: IFreeDictionaryPhonetic[];
  meanings: IFreeDictionaryMeaning[];
}
