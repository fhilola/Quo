import './Navbar.css'
import { Button, Container } from '../../utils'
import logo from '../../assets/logo.svg'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const {t} = useTranslation();
    const {i18n} = useTranslation();
    function handleLanguage(e){
        i18n.changeLanguage(e.target.value)
    }
  return (
    <Container>
        <nav>
            <img src={logo} alt="" />
            <div className='wrapper'>
                <select>
                    <option value="usa">USA</option>
                    <option value="sum">SUM</option>
                    <option value="rub">RUB</option>
                </select>
                <div className='menu'>
                    <select defaultValue={localStorage.getItem('lang')} onChange={handleLanguage}>
                        <option value="en">EN</option>
                        <option value="uz">UZB</option>
                        <option value="ru">RU</option>
                    </select>
                    <ul>
                        <li>{t('howitworks')}</li>
                        <li>{t('business')}</li>
                        <li>{t('help')}</li>
                    </ul>
                </div>
                <div className='auth'>
                    <strong>Log In</strong>
                    <Button text={'Sign Up'}/>
                </div>
            </div>
        </nav>
    </Container>
  )
}

export default Navbar