import styled, { ThemeProvider } from 'styled-components'
import {GlobalStyles, MyRoutes} from './index'
import {Device} from './styles/breakpoints'
import { Sidebar } from './components/organism/sidebar/Sidebar'
import { useThemeStore } from './store/ThemeStore'

function App() {

  const {themeStyle} = useThemeStore()

  return (
    <ThemeProvider theme={themeStyle}>
      <Container>
        <GlobalStyles />
        <section className='contentSidebar'>
          <Sidebar />
        </section>
        <section className='contentMenuHamburguer'>
          Menu
        </section>
        <section className='contentRouters'>
          <MyRoutes />
        </section>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  .contentSidebar{
    display: none;
    background-color: rgba(78,45,78,0.5);
  }
  .contentMenuHamburguer{
    position: absolute;
    background-color: rgba(220, 20, 20, 0.5);
  }
  .contentRouters{
    background-color: rgba(224, 20, 224, 0.5);
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    .contentSidebar{
      display: initial;
    }
    .contentMenuHamburguer{
      display: none;
    }
    .contentRouters{
      grid-column: 2;
    }
  }
`
export default App
