
### 실행방법

1. repository를 클론 받은 다음 루트 폴더에 .env 파일을 생성한다.

```bash
# .env
REACT_APP_KAKAO_KEY=b0a94e3fc10f13db612bba0a3b06f68e
```

2. 터미널에 명령어를 입력하여 실행한다.

```bash
yarn start
# or
npm run start
```

### 프로젝트 구조

```bash
📦front_web
 ┣ 📂src
 ┃ ┣ 📂modules
 ┃ ┃ ┣ 📂states
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┗ 📜User.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜MapModule.tsx
 ┃ ┃ ┗ 📜UserModule.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📜SearchForm.tsx
 ┃ ┃ ┃ ┣ 📜InputForm.tsx
 ┃ ┃ ┃ ┣ 📜MapSearchModal.tsx
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜List.tsx
 ┃ ┃ ┃ ┣ 📜Map.tsx
 ┃ ┃ ┃ ┣ 📜MapModal.tsx
 ┃ ┃ ┃ ┗ 📜UserForm.tsx
 ┃ ┃ ┗ 📂templates
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┃ ┗ 📜Register.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜HomePage.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜RegisterPage.tsx
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂interfaces
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂libs
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜makeAddress.ts
 ┃ ┣ 📜reportWebVitals.ts
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜react-app-env.d.ts
 ┃ ┣ 📜Router.tsx
 ┃ ┗ 📜index.css
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜manifest.json
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜robots.txt
 ┃ ┗ 📜index.html
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜tsconfig.json
 ┣ 📜config-overrides.js
 ┣ 📜.env
 ┣ 📜package.json
 ┗ 📜yarn.lock
```

### 상태관리

- recoil

hooks 형태로 사용가능하여 보다 쉽게 사용할 수 있다는 장점이 있어 사용하기로 선택하였다.

state들을 관리하는데 필요한 atom들은 state 폴더 안에서 관리하였다.

- recoil-persist

데이터를 프론트 단에서 관리하기 위해 recoil-persist 라이브러리를 추가로 사용하였다.

recoil-persist 라이브러리를 통해 recoil로 관리되는 state들을 자동으로 로컬스토리지에 저장/수정/삭제될 수 있도록 구현하였다.
