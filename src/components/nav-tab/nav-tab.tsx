import Styles from './nav-tab.module.scss'
interface Props{
    message:string
}

const Tab = ({message}:Props) => {    
    return (
    <div className={Styles['paragraphContainer']}><p className={Styles['paragraph']}>{message}</p></div>
  )
}

export default Tab