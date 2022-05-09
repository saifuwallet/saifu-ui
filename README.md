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
function App() {
  const [tokenMap, setTokenMap] = useState<Map<string, TokenInfo>>(new Map());
  const queryClient = new QueryClient();

  useEffect(() => {
    new TokenListProvider().resolve().then((tokens) => {
      const tokenList = tokens.filterByClusterSlug('mainnet-beta').getList();

      setTokenMap(
        tokenList.reduce((map, item) => {
          map.set(item.address, item);
          return map;
        }, new Map())
      );
    });
  }, [setTokenMap]);

  const tokenAcc: TokenAccount = {
    mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    amount: '10000',
    decimals: 1,
  };
  return (
    <SaifuUIProvider tokenMap={tokenMap} queryClient={queryClient}>
      <div className="pt-48 flex justify-center">
        <div className="space-y-2">
          <TokenAccountCard tokenAccount={tokenAcc} />
          <TokenAccountCard tokenAccount={tokenAcc} />
          <TokenAccountCard tokenAccount={tokenAcc} />
        </div>
      </div>
    </SaifuUIProvider>
  );
}
```

Enjoy!

## Storybook

```
yarn storybook
```

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
