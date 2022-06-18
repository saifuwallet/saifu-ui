import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Card from './components/Elements/Card/Card.native';
import Text from './components/Elements/Text.native';
import Button from './components/Elements/Button.native';
import { registerRootComponent } from 'expo'; // import it explicitly
import Asset from './components/Asset.native';
import tw from 'twrnc';

function App() {
  return (
    <View style={tw`mt-52`}>
      <StatusBar style="auto" />
      <Card>
        <Asset
          metadata={{
            data: {
              name: 'USD Coin',
              symbol: 'USDC',
              image:
                'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
            },
          }}
          balance={{
            data: {
              amount: 500,
              decimals: 0,
            },
          }}
          price={{
            data: {
              vsCurrency: {
                usd: 1,
              },
            },
          }}
        />
        <Asset
          metadata={{
            data: {
              name: 'USD Coin',
              symbol: 'USDC',
              image:
                'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
            },
          }}
          balance={{
            data: {
              amount: 500,
              decimals: 0,
            },
          }}
          price={{
            data: {
              vsCurrency: {
                usd: 1,
              },
            },
          }}
        />
        <Asset
          metadata={{
            data: {
              name: 'USD Coin',
              symbol: 'USDC',
              image:
                'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
            },
          }}
          balance={{
            data: {
              amount: 500,
              decimals: 0,
            },
          }}
          price={{
            data: {
              vsCurrency: {
                usd: 1,
              },
            },
          }}
        />
      </Card>
    </View>
  );
}

export default registerRootComponent(App);
