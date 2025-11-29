import { styled } from "styled-components";
import { Btnsave, InputText2, Linea, Title, useAuthStore, useEmpresaStore } from "../../index";
import { v } from "../../styles/variables";
import { Device } from "../../styles/breakpoints";
import { Footer } from "../organism/Footer";

export function LoginTemplate() {

  const {loginGoogle} = useAuthStore()
  const {insertarempresa} = useEmpresaStore()
  
  async function insertar(){
    const p = {
      nombre:'Prueba2 '
    }
    await insertarempresa(p)
  }

  return (
    <Container>
      <div className="card">
        <ContentLogo>
          <img src={v.logo} alt="" />
        </ContentLogo>
        <Title $paddingbottom="20px">Ingresar</Title>
        <form action="">
          <InputText2>
            <input className="form__field" placeholder="email" type="text" />
          </InputText2>
          <InputText2>
            <input
              className="form__field"
              placeholder="contraseña"
              type="password"
            />
          </InputText2>
          <Btnsave
            titulo="INGRESAR"
            bgcolor="#1CB0F6"
            color="255,255,255"
            width="100%"
          />
        </form>
        <Linea>
          <span>0</span>
        </Linea>
        <Btnsave funcion={loginGoogle} titulo="Google" bgcolor="#ffff" icono={<v.iconogoogle />} />
        <Btnsave titulo='Insertar Empresa' funcion={insertar}  />
      </div>
      <Footer />
    </Container>
  );
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 0 10px;
  color: ${({ theme }) => theme.text};
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 20px;
    @media ${Device.tablet} {
      width: 400px;
    }
  }
`;

const ContentLogo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  img{
    width: 10%;
  }
`