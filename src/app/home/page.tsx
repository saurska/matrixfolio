"use client"
import Matrix from "@/components/matrix.tsx";
const home = ()=>{
    return(<>
       <Matrix></Matrix>
    <div className="flex">
        <div className="flex items-center h-screen w-screen justify-center">
            Weclome to the Matrix
        </div>
    </div>
    </>
    )
}

export default home;