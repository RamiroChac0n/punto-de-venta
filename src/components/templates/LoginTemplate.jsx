import { styled } from "styled-components";
import { Btnsave, InputText2, Linea, Title, useAuthStore } from "../../index";
import { v } from "../../styles/variables";
import { Device } from "../../styles/breakpoints";
import { Footer } from "../organism/Footer";

export function LoginTemplate() {
  const {loginGoogle} = useAuthStore()
  return (
    <Container>
      <div className="card">
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
