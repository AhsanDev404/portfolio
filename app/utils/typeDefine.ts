import { ComponentType } from "react";
export interface NavButtons {
  name: string;
}

export interface LinkType {
  name: string;
  link: string;
  icon: ComponentType;
}
export interface Experience {
  companyName: string;
  position: string;
  learning: string;
  tenure: string;
  icon: ComponentType;
}

export interface DeveloperInfo {
  name: string;
  fullName: string;
  gender: string;
  type: string;
  country: string;
  description: string;
  skills:string

}
export interface Skill {
  name: string;
  icon: ComponentType;
}