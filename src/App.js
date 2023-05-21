import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molcules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "てんてん",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "11111@aaa.com",
  phone: "000-9999-8888",
  company: {
    name: "テスト会社",
  },
  website: "test.com",
};

export default function App() {
  return (
    <BrowserRouter>
    <HeaderOnly className="App">
      {/* <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton> */}
      <br />
      <SearchInput></SearchInput>
      <UserCard user={user}></UserCard>
    </HeaderOnly>
    </BrowserRouter>
  );
}
