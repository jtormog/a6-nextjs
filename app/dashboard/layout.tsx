import Navbar from "../ui/navbar"
export default function dashboard({children}){
    return(
        <body className="flex">
        <Navbar />
    {children}
    </body>
    )
    
}
