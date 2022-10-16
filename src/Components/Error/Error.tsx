import './Error.css';
import errorImg from '../../assets/images/page-not-found.svg'
export default function Error(){
    return(
        <div className='Error'>
        <img src={errorImg} alt="Error 404 Not Found" />
        <h1>No Page Found</h1>
        
        </div>
    )
}