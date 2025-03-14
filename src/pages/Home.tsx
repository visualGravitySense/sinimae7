import { useAuth } from "../store/useAuth";

function Home() {
    const { isAuthenticated, login, logout } = useAuth();

    return 
        <>
                <h1>Sinimäe 7 korteriühistu | Avaleht</h1>
            <div>
                {isAuthenticated ? (
                    <button onClick={logout}>Выйти</button>
                ) : (
                    <button onClick={login}>Войти</button>
                )}
            </div>
            
        </>
  }
  export default Home;
  