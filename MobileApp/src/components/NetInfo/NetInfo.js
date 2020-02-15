import NetInfo from '@react-native-community/netinfo';
export async function checkNet() {
  let state = await NetInfo.fetch();
  //state.isConnected
  return state.isInternetReachable;
}
