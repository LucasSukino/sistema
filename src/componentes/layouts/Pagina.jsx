import Menu from "./componentes/layouts/Menu";
import Cabecalho from "./componentes/layouts/Cabecalho"

export default function Pagina(props){
    return(
        <>
            <Cabecalho titulo = "Sistema de controle Gerencial"> </Cabecalho>
            <Menu/>
            {
                props.childen
            }
        </>
        
    );
}    