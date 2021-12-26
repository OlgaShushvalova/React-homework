import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../Store";
import { MessageForm } from "../MessageForm";

describe("test MessageForm component", () => {
  test("find 'Отправить' text", () => {
    render(
      <Provider store={store}>
        <MessageForm />
      </Provider>
    );
    const linkElement = screen.getByText(/Отправить/i);
    expect(linkElement).toBeInTheDocument();
  });
});
