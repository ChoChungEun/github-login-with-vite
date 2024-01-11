# 사전 준비
1. gitub OAuth 등록 (github 프로필 -> setting -> developer setting -> OAuth Apps)
2. Application name 등록
3. Homepage URL 등록
4. Authorization callback URL 등록


# FLOW
- 로그인 화면 -> 로그인 버튼 클릭 -> 깃헙 로그인 화면으로 이동 -> 로그인 성공 -> 깃헙에서 자동으로 callback URL에 등록한 url 로 이동시킴 -> url 뒤에 쿼리스트으로 ?code=dc10af246c912ce4309d 가 같이옴
```
function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
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
```

# 추가 설명
- 실제 서버와 구현할때는 쿼리스트링으로 온 code 를 서버로 보낸다. (post 요청)
- 그러면 서버는 코드를 사용하여 accessToken 을 클라이언트로 보낸다.
- 클라이언트는 서버에서 받은 accessToken 을 헤더에 담아 유저 정보 api 를 get 요청해서 받아온다.
```
const getUser = await axios.get('https://api.github.com/user', {
  headers: { authorization: `token ${accessToken}` }
})
```
