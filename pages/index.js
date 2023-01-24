import Head from 'next/head'
import Card from '../components/Card';
import Grid from '../components/Grid';
import Header from '../components/Header';
import data from '../data/data';
// import View from '../components/[moduleid]'

function Home(){

  const displayCards = (item)=>{
    return(
      <Card id={item.id} key={item.id} img={item.image} title={item.title} description={item.description} buttonTitle='Learn more' />
    )
  }

  return (
    <>
      <Head>
        <title>Cyber Security</title>
      </Head>
      <Header />
      <Grid>
        {data.map(displayCards)}

      </Grid>
    </>
  )
}

export default Home;
