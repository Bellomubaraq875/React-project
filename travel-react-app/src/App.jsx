import Grid from '@mui/material/Grid'
import Header from './Components/Header/Header'
import Map from './Components/Map/map'
import List from './Components/List/list'

function App() {
  return (
    <>
      <Header />
      <Grid container spacing={3} sx={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  )
}

export default App
