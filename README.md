# @toolkitx/fastspring

[![npm version](https://img.shields.io/npm/v/@toolkitx/fastspring.svg?style=flat-square)](https://www.npmjs.com/package/@toolkitx/fastspring)
[![npm downloads](https://img.shields.io/npm/dm/@toolkitx/fastspring.svg?style=flat-square)](https://www.npmjs.com/package/@toolkitx/fastspring)

## Installing
Using npm

```
npm install @toolkitx/fastspring
```

## Example

Get accounts

```ts
import {FastSpring, FastSpringPageResponse} from '@toolkitx/fastspring';

const fastSprint = new FastSpring('YOUR_USER_NAME', 'YOUR_PASSWORD');
const accounts: FastSpringPageResponse = await fastSprint.accounts().get();
```

Get single account

```ts
const account = await fastSprint.accounts('ACCOUNT_ID').get();
```


Query accounts

```ts
const accounts = await fastSprint.accounts().query({email: 'EXAMPLE@EMAIL'}).get();
```

Create Session
```ts
const payload = {
    account: 'YOUR_ACCOUNT_ID',
    items: [
        {
            product: 'YOUR_PRODUCT_ID',
            quantity: 1,
        },
    ],
};
const session = await fastSprint.sessions().post(payload);
```