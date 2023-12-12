// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import Abacus from 'mdi-material-ui/Abacus'
import Unity from 'mdi-material-ui/Unity'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { Telegram } from '@mui/icons-material'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      badgeContent: 'new',
      badgeColor: 'error',
      path: '/scanner',
      /*  children: [
      
        {
          title: 'Scanner',
          path: '/scanner'
        },
        {
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        } 
      ]*/
    },
    {
      sectionTitle: 'Section'
    }, 
    {
      title: 'AvaxaLyzerBot',
      icon: Telegram,
      externalLink: true,
      openInNewTab: true,
      path: 'https://t.me/AvaxaLyzerBot'
    },
    {
      title: 'Community',
      icon: HomeOutline, 
      externalLink: true,
      openInNewTab: true,
      path: 'https://t.me/AvaxaLyzer'
    }
  ]
}

export default navigation
