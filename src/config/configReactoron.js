import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'

const reactotron = Reactotron.configure({ name: 'React Native HD' })
  .useReactNative()
  .use(reactotronRedux()) 
  .connect()

export default reactotron
