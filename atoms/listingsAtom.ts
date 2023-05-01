import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";
import { RecoilEnv } from "recoil";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export interface Listing {
  id: string;
  creatorId: string;
  creatorDisplayName: string;
  createdAt: Timestamp;
  propertyTitle: string;
  propertyDescription: string;
  propertyType: string;
  propertyStatus: string;
  propertyLabel: string;
  bedrooms: string;
  bathrooms: string;
  areaSize: string;
  postFix: string;
  landArea: string;
  areaPostFix: string;
  garages: string;
  garageSize: string;
  yearBuilt: string;
  address: string;
  country: string;
  stateOrCounty: string;
  city: string;
  area: string;
  zipOrPostal: string;
  latitude: string;
  longitude: string;
  imageURLs: string[];
}
