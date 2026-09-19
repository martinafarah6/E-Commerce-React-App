import './LogOut.css';
function LogOut(props){
    const handleout=()=>{
        localStorage.clear();
        props.fin(false);
        props.fup(false);
        alert("Your log out compleeted Successfuly");
    }
    return(
        
        <section className='out'>
            {!props.up && <h2 className='warnning'>Please Create Your Account First....</h2>}
            {!props.In&&props.up && <h2 className='warnning'>Please Sign In First...</h2>}
            {
                props.up&&props.In&& 
                <>
                    <h2 className='outtitle'>Are you Want To Log Out?</h2>
                    <button onClick={handleout}>Yes</button>
                    <button>No</button>
                </>
            }
        </section>
    )
}
export default LogOut;
