
import Home from '~/pages/Home'
import Search from '~/pages/Search'
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import  {HeaderOnly} from '~/components/Layout'
import routesConfig from '~/config/routes'

const publicRoutes=[
 {path:routesConfig.home,component:Home},
 {path:routesConfig.following,component:Following},
 {path:routesConfig.profile,component:Profile},
 {path:routesConfig.upload,component:Search,layout:null},
 {path:routesConfig.search,component:Upload,layout:HeaderOnly}
]
const privateRoutes=[

]
export {publicRoutes,privateRoutes}