import { Button, Card, TokenLogo } from './index';

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

export default App;
