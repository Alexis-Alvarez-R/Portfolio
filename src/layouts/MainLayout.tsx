import { Header, Main } from "../components/index";
import { TabSection } from "../components/TabSection";

export const MainLayout = () => {
  return (
    <div className="w-full">
      <Header></Header>
      <Main></Main>
      <TabSection></TabSection>
    </div>
  );
};
