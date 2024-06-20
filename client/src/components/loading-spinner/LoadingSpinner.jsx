import Spinner from "react-bootstrap/Spinner";

const  LoadingSpinner = () => {
    return (
        <>
            <Spinner
                style={{ top: '4rem',width: '5rem',height: '5rem',position: 'relative',left: '37rem',zIndex: '1', color:'#FB5B21'}}
                animation="border"
            />
        </>
    );
}

export default LoadingSpinner;
