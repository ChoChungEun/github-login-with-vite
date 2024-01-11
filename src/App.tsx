function App() {
  const clientId = "d06e6c9d722c4d923a42";
  const redirectUrl = "http://localhost:5173/auth/github/callback";
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;

  const handleLogin = () => {
    window.location.href = githubURL;
  };

  return (
    <div>
      <button onClick={handleLogin}>깃허브 로그인</button>
    </div>
  );
}

export default App;
