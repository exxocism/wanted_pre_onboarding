# wanted_pre_onboarding
Wanted onboard course submission repository

- 구현한 방법과 이유에 대한 간략한 내용
  > 각 React Component에 Styled-components를 활용하여 작성하였다.
  > CSS를 사용하여 작성하였고 필요한 경우 State를 사용하여 애니메이션을 띄웠다.

- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

  > 모달창을 띄울 떄, 특정한 구역까지만 어둡게 표현하는 부분에 어려움을 겪었다.
  > 범용으로 사용할 수 있도록 매직넘버 없이 CSS만으로 표현하는 방식이 있을거 같은 생각이 들었지만
  > 쉽게 구현하는 방법을 찾기 어려웠다.
  > 결국은 UseRef 훅을 사용하여 부모 노드의 크기를 대입하여 해결했다.

- 자세한 실행 방법

  > custom-component 폴더 내부에서 npm ci를 입력하여 패키지를 설치한 뒤
  > npm start를 입력하여 테스트 환경에서 렌더링된 예시를 확인할 수 있다.