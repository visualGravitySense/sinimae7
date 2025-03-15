import { useAuth } from "../store/useAuth";
import { loginWithGoogle, logout } from "../firebase";

function Home() {
  const { user } = useAuth();

  return (
    <>
      <h1>Sinimäe 7 korteriühistu | Avaleht</h1>
      <div>
        {user ? (
          <>
            <p>Привет, {user.displayName}!</p>
            <button onClick={logout}>Выйти</button>
          </>
        ) : (
          <button onClick={loginWithGoogle}>Войти через Google</button>
        )}
      </div>
    </>
  );
}

export default Home;
