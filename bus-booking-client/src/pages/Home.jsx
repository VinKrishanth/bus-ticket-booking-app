import HeroSection from '../components/home/HeroSection'
import SectionCard from '../components/home/SectionCard'

export default function Home() {
  return (
    <>
      <HeroSection />
      {
        [
        {
          Option:'Payment Options',
          title:'Multiple Payment Options'
        },
        {
          Option:'',
          title:'Why Book with BusSeat?'
        },
        ].map((info, index) => {
          
        })
      }
      <SectionCard 
        Option='Payment Options'
        title='Multiple Payment Options'
        key={1}
      />
      <SectionCard 
        Option=''
        title='Why Book with BusSeat?'
        key={2}
      />
    </>
  )
}