import './DashBoard.css';
export default function DashBoard(props)
{
    return(
        <section className='dash'>
            <h2 className='dashtitle'>DashBoard</h2>
            {!props.up && <h2 className='warnning'>Please Create Your Account First....</h2>}
            {!props.In&& props.up && <h2 className='warnning'>Please Sign In First...</h2>}
            {
                props.In&&props.up&&
            <div className='dashcontent'>
                <h2 className='hello'>Hello,{localStorage.getItem("UserName")} 👋</h2>
                <h3>{localStorage.getItem("Email")}</h3>
                <h3>Account Status: Active 🟢</h3>
            </div>
            }
        </section>
    )
}
