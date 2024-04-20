import Styles from './nav.module.scss'
import Tab from '../nav-tab/nav-tab'
import { tabs } from '../../models/nav'
{/* <Tab message={'about me'}/> */}
const Navigation = () => {
  return (
    <div className={Styles["flexNavContainer"]}>{
       tabs.map((tab)=>{
        return(
            <>
            <Tab message={tab}/>
            </>
        )
       })
    }</div>
  )
}
export default Navigation