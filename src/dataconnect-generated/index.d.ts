import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateReviewData {
  review_insert: Review_Key;
}

export interface CreateReviewVariables {
  swapRequestId: UUIDString;
  revieweeId: UUIDString;
  rating: number;
  comment?: string | null;
}

export interface CreateUserSkillData {
  userSkill_insert: UserSkill_Key;
}

export interface CreateUserSkillVariables {
  skillId: UUIDString;
  type: string;
  level: string;
  years: number;
}

export interface ListMySkillsData {
  userSkills: ({
    proficiencyLevel: string;
    type: string;
    yearsOfExperience?: number | null;
    skill: {
      name: string;
      category: string;
    };
  })[];
}

export interface RequestSwapData {
  swapRequest_insert: SwapRequest_Key;
}

export interface RequestSwapVariables {
  receiverId: UUIDString;
  message?: string | null;
  date?: TimestampString | null;
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface SwapRequest_Key {
  id: UUIDString;
  __typename?: 'SwapRequest_Key';
}

export interface UserSkill_Key {
  id: UUIDString;
  __typename?: 'UserSkill_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserSkillVariables): MutationRef<CreateUserSkillData, CreateUserSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserSkillVariables): MutationRef<CreateUserSkillData, CreateUserSkillVariables>;
  operationName: string;
}
export const createUserSkillRef: CreateUserSkillRef;

export function createUserSkill(vars: CreateUserSkillVariables): MutationPromise<CreateUserSkillData, CreateUserSkillVariables>;
export function createUserSkill(dc: DataConnect, vars: CreateUserSkillVariables): MutationPromise<CreateUserSkillData, CreateUserSkillVariables>;

interface RequestSwapRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RequestSwapVariables): MutationRef<RequestSwapData, RequestSwapVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RequestSwapVariables): MutationRef<RequestSwapData, RequestSwapVariables>;
  operationName: string;
}
export const requestSwapRef: RequestSwapRef;

export function requestSwap(vars: RequestSwapVariables): MutationPromise<RequestSwapData, RequestSwapVariables>;
export function requestSwap(dc: DataConnect, vars: RequestSwapVariables): MutationPromise<RequestSwapData, RequestSwapVariables>;

interface CreateReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  operationName: string;
}
export const createReviewRef: CreateReviewRef;

export function createReview(vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;
export function createReview(dc: DataConnect, vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface ListMySkillsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMySkillsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMySkillsData, undefined>;
  operationName: string;
}
export const listMySkillsRef: ListMySkillsRef;

export function listMySkills(options?: ExecuteQueryOptions): QueryPromise<ListMySkillsData, undefined>;
export function listMySkills(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMySkillsData, undefined>;

