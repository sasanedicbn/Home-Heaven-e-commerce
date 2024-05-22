import '../index.css'
const HomeWrapper = ({children, paddingTop = "16px"}) => {
    const style = {
        paddingTop: paddingTop
    }
    return(
     <div className='wrapper' style={style}>
       {children}
     </div>
    )
}
export default HomeWrapper;