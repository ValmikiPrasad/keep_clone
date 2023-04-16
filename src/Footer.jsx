import React from "react";
const Footer=()=>{
    const year=new Date().getFullYear();
    return(
        <>
        <footer>
            <p>© Copyright {year} - {year+1} www.KeepIt.com. All rights reserved. Developed by KeepIt.</p>
        </footer>
        </>
    )
}
export default Footer;