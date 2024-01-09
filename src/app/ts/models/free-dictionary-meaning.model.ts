import { IFreeDictionaryDefinition } from "./free-dictionary-definition.model";

export interface IFreeDictionaryMeaning {
  partOfSpeech: string;
  synonyms: string[];
  antonyms: string[];
  definitions: IFreeDictionaryDefinition[];
}
