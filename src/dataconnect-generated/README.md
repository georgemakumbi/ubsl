# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListMySkills*](#listmyskills)
- [**Mutations**](#mutations)
  - [*CreateUserSkill*](#createuserskill)
  - [*RequestSwap*](#requestswap)
  - [*CreateReview*](#createreview)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListMySkills
You can execute the `ListMySkills` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMySkills(options?: ExecuteQueryOptions): QueryPromise<ListMySkillsData, undefined>;

interface ListMySkillsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMySkillsData, undefined>;
}
export const listMySkillsRef: ListMySkillsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMySkills(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMySkillsData, undefined>;

interface ListMySkillsRef {
  ...
  (dc: DataConnect): QueryRef<ListMySkillsData, undefined>;
}
export const listMySkillsRef: ListMySkillsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMySkillsRef:
```typescript
const name = listMySkillsRef.operationName;
console.log(name);
```

### Variables
The `ListMySkills` query has no variables.
### Return Type
Recall that executing the `ListMySkills` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMySkillsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListMySkills`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMySkills } from '@dataconnect/generated';


// Call the `listMySkills()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMySkills();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMySkills(dataConnect);

console.log(data.userSkills);

// Or, you can use the `Promise` API.
listMySkills().then((response) => {
  const data = response.data;
  console.log(data.userSkills);
});
```

### Using `ListMySkills`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMySkillsRef } from '@dataconnect/generated';


// Call the `listMySkillsRef()` function to get a reference to the query.
const ref = listMySkillsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMySkillsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userSkills);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userSkills);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUserSkill
You can execute the `CreateUserSkill` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUserSkill(vars: CreateUserSkillVariables): MutationPromise<CreateUserSkillData, CreateUserSkillVariables>;

interface CreateUserSkillRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserSkillVariables): MutationRef<CreateUserSkillData, CreateUserSkillVariables>;
}
export const createUserSkillRef: CreateUserSkillRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUserSkill(dc: DataConnect, vars: CreateUserSkillVariables): MutationPromise<CreateUserSkillData, CreateUserSkillVariables>;

interface CreateUserSkillRef {
  ...
  (dc: DataConnect, vars: CreateUserSkillVariables): MutationRef<CreateUserSkillData, CreateUserSkillVariables>;
}
export const createUserSkillRef: CreateUserSkillRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserSkillRef:
```typescript
const name = createUserSkillRef.operationName;
console.log(name);
```

### Variables
The `CreateUserSkill` mutation requires an argument of type `CreateUserSkillVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserSkillVariables {
  skillId: UUIDString;
  type: string;
  level: string;
  years: number;
}
```
### Return Type
Recall that executing the `CreateUserSkill` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserSkillData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserSkillData {
  userSkill_insert: UserSkill_Key;
}
```
### Using `CreateUserSkill`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUserSkill, CreateUserSkillVariables } from '@dataconnect/generated';

// The `CreateUserSkill` mutation requires an argument of type `CreateUserSkillVariables`:
const createUserSkillVars: CreateUserSkillVariables = {
  skillId: ..., 
  type: ..., 
  level: ..., 
  years: ..., 
};

// Call the `createUserSkill()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUserSkill(createUserSkillVars);
// Variables can be defined inline as well.
const { data } = await createUserSkill({ skillId: ..., type: ..., level: ..., years: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUserSkill(dataConnect, createUserSkillVars);

console.log(data.userSkill_insert);

// Or, you can use the `Promise` API.
createUserSkill(createUserSkillVars).then((response) => {
  const data = response.data;
  console.log(data.userSkill_insert);
});
```

### Using `CreateUserSkill`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserSkillRef, CreateUserSkillVariables } from '@dataconnect/generated';

// The `CreateUserSkill` mutation requires an argument of type `CreateUserSkillVariables`:
const createUserSkillVars: CreateUserSkillVariables = {
  skillId: ..., 
  type: ..., 
  level: ..., 
  years: ..., 
};

// Call the `createUserSkillRef()` function to get a reference to the mutation.
const ref = createUserSkillRef(createUserSkillVars);
// Variables can be defined inline as well.
const ref = createUserSkillRef({ skillId: ..., type: ..., level: ..., years: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserSkillRef(dataConnect, createUserSkillVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userSkill_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userSkill_insert);
});
```

## RequestSwap
You can execute the `RequestSwap` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
requestSwap(vars: RequestSwapVariables): MutationPromise<RequestSwapData, RequestSwapVariables>;

interface RequestSwapRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RequestSwapVariables): MutationRef<RequestSwapData, RequestSwapVariables>;
}
export const requestSwapRef: RequestSwapRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
requestSwap(dc: DataConnect, vars: RequestSwapVariables): MutationPromise<RequestSwapData, RequestSwapVariables>;

interface RequestSwapRef {
  ...
  (dc: DataConnect, vars: RequestSwapVariables): MutationRef<RequestSwapData, RequestSwapVariables>;
}
export const requestSwapRef: RequestSwapRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the requestSwapRef:
```typescript
const name = requestSwapRef.operationName;
console.log(name);
```

### Variables
The `RequestSwap` mutation requires an argument of type `RequestSwapVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RequestSwapVariables {
  receiverId: UUIDString;
  message?: string | null;
  date?: TimestampString | null;
}
```
### Return Type
Recall that executing the `RequestSwap` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RequestSwapData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RequestSwapData {
  swapRequest_insert: SwapRequest_Key;
}
```
### Using `RequestSwap`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, requestSwap, RequestSwapVariables } from '@dataconnect/generated';

// The `RequestSwap` mutation requires an argument of type `RequestSwapVariables`:
const requestSwapVars: RequestSwapVariables = {
  receiverId: ..., 
  message: ..., // optional
  date: ..., // optional
};

// Call the `requestSwap()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await requestSwap(requestSwapVars);
// Variables can be defined inline as well.
const { data } = await requestSwap({ receiverId: ..., message: ..., date: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await requestSwap(dataConnect, requestSwapVars);

console.log(data.swapRequest_insert);

// Or, you can use the `Promise` API.
requestSwap(requestSwapVars).then((response) => {
  const data = response.data;
  console.log(data.swapRequest_insert);
});
```

### Using `RequestSwap`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, requestSwapRef, RequestSwapVariables } from '@dataconnect/generated';

// The `RequestSwap` mutation requires an argument of type `RequestSwapVariables`:
const requestSwapVars: RequestSwapVariables = {
  receiverId: ..., 
  message: ..., // optional
  date: ..., // optional
};

// Call the `requestSwapRef()` function to get a reference to the mutation.
const ref = requestSwapRef(requestSwapVars);
// Variables can be defined inline as well.
const ref = requestSwapRef({ receiverId: ..., message: ..., date: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = requestSwapRef(dataConnect, requestSwapVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.swapRequest_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.swapRequest_insert);
});
```

## CreateReview
You can execute the `CreateReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createReview(vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface CreateReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
}
export const createReviewRef: CreateReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createReview(dc: DataConnect, vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface CreateReviewRef {
  ...
  (dc: DataConnect, vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
}
export const createReviewRef: CreateReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createReviewRef:
```typescript
const name = createReviewRef.operationName;
console.log(name);
```

### Variables
The `CreateReview` mutation requires an argument of type `CreateReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateReviewVariables {
  swapRequestId: UUIDString;
  revieweeId: UUIDString;
  rating: number;
  comment?: string | null;
}
```
### Return Type
Recall that executing the `CreateReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateReviewData {
  review_insert: Review_Key;
}
```
### Using `CreateReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createReview, CreateReviewVariables } from '@dataconnect/generated';

// The `CreateReview` mutation requires an argument of type `CreateReviewVariables`:
const createReviewVars: CreateReviewVariables = {
  swapRequestId: ..., 
  revieweeId: ..., 
  rating: ..., 
  comment: ..., // optional
};

// Call the `createReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createReview(createReviewVars);
// Variables can be defined inline as well.
const { data } = await createReview({ swapRequestId: ..., revieweeId: ..., rating: ..., comment: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createReview(dataConnect, createReviewVars);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
createReview(createReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

### Using `CreateReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createReviewRef, CreateReviewVariables } from '@dataconnect/generated';

// The `CreateReview` mutation requires an argument of type `CreateReviewVariables`:
const createReviewVars: CreateReviewVariables = {
  swapRequestId: ..., 
  revieweeId: ..., 
  rating: ..., 
  comment: ..., // optional
};

// Call the `createReviewRef()` function to get a reference to the mutation.
const ref = createReviewRef(createReviewVars);
// Variables can be defined inline as well.
const ref = createReviewRef({ swapRequestId: ..., revieweeId: ..., rating: ..., comment: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createReviewRef(dataConnect, createReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

