import type { NextPage } from 'next'
import HomePage from './HomePage/HomePage';
import theme from '../styles/theme'
import { store } from 'store';
import { Provider } from 'react-redux'
import {MantineProvider} from '@mantine/core';

const Home: NextPage = () => {
  return (
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
          <Provider store={store}>
            <HomePage/>
          </Provider>
      </MantineProvider>
  )
}

export default Home
