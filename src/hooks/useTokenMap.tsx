import { SaifuUIContext } from '../contexts/SaifuUIProvider';
import { useContext } from 'react';

export default function useTokenMap() {
  const { tokenMap } = useContext(SaifuUIContext);
  return tokenMap;
}
