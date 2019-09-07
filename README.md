<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's blog starter
</h1>

블로그 보일러플레이트로 빠르게 프로젝트를 시작해보세요. 개츠비 주요 설정 파일과, 리액트를 위한 빠른 앱 제네레이터를 통해 빠르게 시작할 수 있습니다. 

_또 다른 아이디어를 갖고 계신가요? 우리가 만든 여러 스타터 콜렉션([official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/))이 도움이 될 지도 모르겠군요._

<br>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    새로운 사이트를 만들기 위해 Gatsby CLI를 사용하세요.
    
    ```sh
    # create a new Gatsby site using the blog starter
    gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
    ```

<br>

2.  **Start developing.**

    새 사이트 폴더로 가서 아래 명령어로 시작하세요.

    ```sh
    cd my-blog-starter/
    gatsby develop
    ```

<br>

3.  **Open the source code and start editing!**

    이제 `http://localhost:8000`에서 확인할 수 있습니다!

    _Note: 두번째 링크도 확인할 수 있습니다.: _`http://localhost:8000/___graphql`_. graphql은 데이터를 쿼리할 때 사용할 수 있는 툴입니다. graphql에 대해 더 알고싶다면 [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)를 참고하세요._

    코드 에디터에서 `my-blog-starter` 폴더를 열고 `src/pages/index.js` 파일을 수정하세요. 수정할 때마다 실시간으로 업데이트된답니다! 👏

## 🧐 What's inside?

개츠비 프로젝트의 최상위 레벨 파일과 폴더부터 빠르게 훑어봅시다.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: 개츠비 프로젝트가 의존하는 모든 모듈을 포함하는 폴더입니다. 프로젝트를 시작할 때 자동으로 설치되었을 겁니다.

2.  **`/src`**: 페이지 템플릿이나 사이트 헤더 같이, 사이트의 프론트엔드(브라우저에서 보는 것들)와 관련된 모든 코드를 포함하는 폴더입니다.`src`는 관례적으로 쓰이는 “source code”를 나타내는 준말입니다.

3.  **`.gitignore`**: git에서 변화를 추적하지 않는 파일입니다. 이 파일에 명시된 파일이나 폴더는 수정되어도 git이 무시하므로 커밋과 푸시에서 제외시킬 수 있습니다. 그러나 버전을 관리하기는 어렵습니다.

4.  **`.prettierrc`**: [Prettier](https://prettier.io/)의 설정 파일입니다. Prettier는 코드의 일관된 형식을 유지하는 데 도움을 주는 툴입니다.

5.  **`gatsby-browser.js`**: 개츠비가 사용하는 브라우저 API([Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/))들을 찾을 수 있는 파일입니다. 브라우저에 영향을 주는 개츠비의 기본 세팅을 확장 또는 커스터마이징할 수 있습니다.

6.  **`gatsby-config.js`**: 개츠비 사이트를 위한 메인 설정 파일입니다. 사이트 제목이나 설명 등 사이트 정보(메타데이터)를 구체적으로 명시할 수 있습니다. 좀 더 구체적인 사항은 [config docs](https://www.gatsbyjs.org/docs/gatsby-config/)에서 확인해보세요.

7.  **`gatsby-node.js`**: 개츠비가 사용하는 node.js API([Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/))를 모아놓은 파일입니다. 사이트 빌드 과정에 영향을 주는 개츠비의 기본 세팅을 확장 또는 커스터마이징할 수 있습니다.

8.  **`gatsby-ssr.js`**: 개츠비에서 사용하는 서버사이드 렌더링 API([Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/))를 확인할 수 있습니다. 서버사이드 렌더링에 영향을 주는 개츠비의 기본 세팅을 확장 또는 커스터마이징할 수 있습니다.

9.  **`LICENSE`**: 개츠비는 MIT 라이센스를 보유하고 있습니다.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: Node.js 프로젝트를 위한 작업 파일입니다. 프로젝트에 대한 메타데이터(예: 이름, 저자 등)을 포함하고 있습니다. 또한 이 파일을 통해 여러분의 프로젝트를 위해 어떤 패키지를 설치해야 하는지 npm이 알 수 있습니다.

12. **`README.md`**: 프로젝트에 도움이 되는 참고 사항들을 담고 있습니다.

## 🎓 Learning Gatsby

더 많은 안내가 필요하신가요? 개츠비 공식 문서는 [이 사이트](https://www.gatsbyjs.org/)에서 확인하실 수 있습니다. 시작하기에 좋은 공간이 몇 군데 있습니다:

- **대부분의 개발자들에게는 ['in-depth tutorial for creating a site with Gatsby'](https://www.gatsbyjs.org/tutorial/) 프로젝트로 시작하길 권합니다.** 어떤 능력이든 0부터 시작하며, 모든 과정을 차근차근 알아가는 튜토리얼입니다.

- **바로 코드 샘플부터 시작하려면, [우리의 공식 문서](https://www.gatsbyjs.org/docs/)를 봐주세요.** 특히 사이드바의 _Guides_, _API Reference_, 그리고 _Advanced Tutorials_ 섹션을 봐주시기 바랍니다.

## 💫 Deploy

[![Netlify에서 배포하세요!](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

<!-- AUTO-GENERATED-CONTENT:END -->
