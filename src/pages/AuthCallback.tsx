import { useEffect } from "react";

const AuthCallback = () => {
  const params = new URL(document.URL).searchParams;
  const code = params.get("code");

  const getToken = async () => {
    try {
      console.log("try");
      // 로그인 시도
      // code를 서버로 보낸다
      // 서버에서 access_token 을 발급해준다
      // 로그인 성공
      // profile 화면으로 이동
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div>code: {code}</div>;
};

export default AuthCallback;
