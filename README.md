# Saifu-UI

React component library for saifu wallet.

## Getting Started

add package

```
yarn add @saifuwallet/saifu-ui
```

update `tailwind.config.js` to include saifu-ui (if you are using tailwind already)

```
module.exports = {
  content: [
    ...,
    './node_modules/@saifuwallet/saifu-ui/dist/**/*.js'
  ],
  // ...
}
```

import components

```ts
import { Button, Card, TokenLogo } from '@saifuwallet/saifu-ui';

function App() {
  return (
    <div className="pt-48 flex justify-center">
      <Card className="space-y-2 max-w-md">
        <div className="flex gap-4">
          <TokenLogo
            className=""
            url="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
          />
          <div>
            <p className="text-lg font-bold">Saifu UI</p>
            <p className="text-md text-gray-500 font-semibold">Components shared accross the UI</p>
          </div>
        </div>
        <Button text="hello world" className="w-full" />
      </Card>
    </div>
  );
}
```

Enjoy!

## Contributing

Install packages and open dev server

```
yarn && yarn dev
```

Build package and link

```
yarn build && yarn link
```

Import package in your project

```
yarn link @saifuwallet/saifu-ui
```
