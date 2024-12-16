import { ClockIcon, CheckIcon } from "@heroicons/react/16/solid"
import clsx from "clsx"

type EstadosPosibles = "pagada" | "pendiente"

interface Estado {
    estado: EstadosPosibles,
}
export default function EstadoFactura({estado } : Estado){
    const iconTailwind = "ml-1 w-4"
    return (
        <>
            <span className={clsx("inline-flex items-center px-2 py-1 rounded",
                {
                    'text-gray-500 bg-gray-100': estado === "pendiente",
                    'text-white bg-green-500': estado === "pagada"
                },
            )}> 
            {estado === "pagada" ? <>Pagada
                <CheckIcon className={iconTailwind}/>
                </>
                : null}
                {estado === "pendiente" ? <>Pendiente <ClockIcon className={iconTailwind}/></> : null}
            </span>
        </>
    )
}