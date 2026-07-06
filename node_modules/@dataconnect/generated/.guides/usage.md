# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUserSkill, requestSwap, createReview, listMySkills } from '@dataconnect/generated';


// Operation CreateUserSkill:  For variables, look at type CreateUserSkillVars in ../index.d.ts
const { data } = await CreateUserSkill(dataConnect, createUserSkillVars);

// Operation RequestSwap:  For variables, look at type RequestSwapVars in ../index.d.ts
const { data } = await RequestSwap(dataConnect, requestSwapVars);

// Operation CreateReview:  For variables, look at type CreateReviewVars in ../index.d.ts
const { data } = await CreateReview(dataConnect, createReviewVars);

// Operation ListMySkills: 
const { data } = await ListMySkills(dataConnect);


```