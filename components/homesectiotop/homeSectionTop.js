import { React } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded'

export default function Homesectiontop () {
  const myLoader = ({ src, width, quality }) => {
    return `https://gateway.pinata.cloud/ipfs/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <Card>

      {/* <CardMedia
          className={classes.media}
          image="https://gateway.pinata.cloud/ipfs/QmUuXk9pjuqNALm8i8GwsvFX2fvZAUhffZXtkmJGaBdr7T"
          target="blank"
          title="Contemplative Reptile"
          onLoad={() => setLoaded(true)}
        /> */}
      <CardContent style={{ 'text-align': 'center', 'max-width': '100%', position: 'center' }}>
        <Image
          loader={myLoader}
          src='QmfBzCjhrtXJMaGX4uz5gquZp5s9YDdn6yypnpcNdH1Dva'
                  // src="site_logo2.jpg"
          alt='Cyber Monkeys Landing Page Image'
          width={600}
          height={400}
        />
        <Typography gutterBottom variant='h4' component='h2'>
          Got Blockchain needs <ContactSupportRoundedIcon />
        </Typography>
        <Typography variant='h6' color='textPrimary' component='p' spacing={1}>
          We are currently living the next technological revolution, with Blockchain technology taking the internet to the next level. As the innovation that the internet, so will Blockchain. From finance, trustless mechanism, decentralization, and many other areas yet discovered. You are about to take the first step in this industry to prevent your business to becoming “Blockbuster”, for this we praise your visionary mind set.
        </Typography>
        <Typography variant='h6' color='textPrimary' component='p' spacing={1}>
          We are very focus group of technologically innovative IT Engineers, in the field of the Web and Blockchain, looking to help business adapt to this new wave of technological advancement by helping you in the following areas:
        </Typography>
      </CardContent>
    </Card>
  )
}
