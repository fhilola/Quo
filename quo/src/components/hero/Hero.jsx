import './Hero.css'
import { Button, Container, Description } from '../../utils'
import { useTranslation } from 'react-i18next'
const Hero = () => {
  const {t} = useTranslation()
  return (
    <Container>
        <div className="hero__wrapper">
            <h1>{t('hero_title')}</h1>
            <Description text={t('hero_info')}/>
            <Button text={t('button')}/>
        </div>
    </Container>
  )
}

export default Hero