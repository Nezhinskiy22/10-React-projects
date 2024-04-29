import "./App.css";
import Accordian from "./components/acordeon";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider/index";
import LoadMoreData from "./components/load-more-button";
import TreeView from "./components/tree-view/index";
import menus from "./components/tree-view/data";
import QRCodeGEnerator from "./components/qr-code-generator/index";
import LightDarkMode from "./components/light-dark-mode/index";
import ScrolIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder/index";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOutsideOnclickTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGEnerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrolIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOutsideOnclickTest /> */}
      {/* <UseWindowResizeTest /> */}
      <ScrollToTopAndBottom />
    </div>
  );
}

export default App;
