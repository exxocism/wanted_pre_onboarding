import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1.5fr 8fr;
  padding: 10px;
`;

const TabMenu = styled.ul`
  list-style: none;
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: grid;
  grid-template-columns: 50px repeat(auto-fit, minmax(100px, 1fr));

  &::before {
    content: '';
    display: block;
  }
`;

const SubMenu = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  animation: ${({ focused }) => (focused ? 'fadeIn 0.5s ease-out forwards' : 'none')};
  border: 1px solid #dcdcdc;

  @keyframes fadeIn {
    from {
      background-color: #dcdcdc;
      color: rgba(73, 73, 73, 0.5);
    }
    to {
      background-color: darkslateblue;
      color: whitesmoke;
      border: 1px solid gray;
      text-shadow: 1px 1px gray;
    }
  }
`;

const Desc = styled.div`
  width: 100%;
  height: 100%;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tab = () => {
  // TIP: Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0 입니다.
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];

  return (
    <Container>
      <TabMenu>
        {menuArr.map(({ name, content }, id) => {
          return (
            <SubMenu
              key={id}
              focused={currentTab === id}
              onClick={() => {
                setCurrentTab(id);
              }}
            >
              {name}
            </SubMenu>
          );
        })}
      </TabMenu>
      <Desc>{menuArr[currentTab].content}</Desc>
    </Container>
  );
};

export default Tab;
