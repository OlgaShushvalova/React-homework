import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../Store";
import { Home } from "../Home";

describe("test Home component", () => {
  test("find 'Магазин для всей семьи' text", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const linkElement = screen.getByText(/Магазин для всей семьи/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("find 'Главная страница' text", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const linkElement = screen.getByText(/Главная страница/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("find 'Главная страница' text", () => {
    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
