import { Footer, Header, Body } from './components'
import { DataContext } from './contexts'
import data from './assets/app.json'

export function App() {
  return (
    <DataContext.Provider value={data}>
      <Header />
      <Body />
      <Footer />
    </DataContext.Provider>
  )
}
