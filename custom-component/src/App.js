import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import ClickToEdit from './component/ClickToEdit';
import AutoComplete from './component/AutoComplete';

import { Box, SubTitle, Container, CustomComponentTitle } from './styles';
import './App.css';

const FormToRender = ({ subtitleName, renderComponent }) => {
  return (
    <Box>
      <SubTitle>{subtitleName}</SubTitle>
      {renderComponent}
    </Box>
  );
};

function App() {
  return (
    <Container>
      <CustomComponentTitle>React Custom Component</CustomComponentTitle>
      <FormToRender subtitleName="Toggle" renderComponent={<Toggle />} />
      <FormToRender subtitleName="Modal" renderComponent={<Modal />} />
      <FormToRender subtitleName="Tab" renderComponent={<Tab />} />
      <FormToRender subtitleName="Tag" renderComponent={<Tag />} />
      <FormToRender subtitleName="ClickToEdit" renderComponent={<ClickToEdit />} />
      <FormToRender subtitleName="AutoComplete" renderComponent={<AutoComplete />} />
    </Container>
  );
}

export default App;
