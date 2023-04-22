import { Link, useMatch } from "react-router-dom";

function CustumLink({children, to, ...props}) {
    const math = useMatch(to);
    console.log(math);

    return(
        <Link to={to} 
        style={{
            color:  math ? "crimson" : "white"
        }}
        {...props}>
            {children}
        </Link>

    );
}

export {CustumLink}