import { Button } from "../components/ui/button";

export function PageLogin() {

  function handleLogin(){
    console.log("Login button clicked In PageLogin");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1>Login</h1>
      <Button color="primary" size="medium" onClick={handleLogin}>
        Entrar
      </Button>
      <Button color="secondary" size="medium" onClick={() => console.log("Esqueci minha senha button clicked")}>
        Esqueci minha senha
      </Button>
      <Button color="danger" size="large" onClick={() => console.log("Sair button clicked")}>
        Sair
      </Button>
    </div>
  )
}