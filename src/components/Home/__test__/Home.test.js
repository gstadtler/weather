import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../index";
import CustomLink from "../../CustomLink";

const MockHome = (props) => {
  return (
    <BrowserRouter>
      <Home>{props.children}</Home>
    </BrowserRouter>
  );
};

test("should render a list of links", () => {
  const { getByRole } = render(<MockHome />);
  const ulElement = getByRole("list");
  expect(ulElement).toBeInTheDocument();
});

test("should render 6 links to the cityClimateInfo route", () => {
  const { getAllByRole } = render(<MockHome />);
  const linkElements = getAllByRole("link");
  expect(linkElements).toHaveLength(6);
});

test("should render same text passed into to prop", () => {
  const { getByText } = render(
    <MockHome>
      <CustomLink to={"Recife"} />
    </MockHome>
  );
  const linkElementText = getByText(/recife/i);
  expect(linkElementText).toBeInTheDocument();
});

// test("should redirect to the specified route", async () => {
//   const { getByText, findByText } = render(
//     <MockHome>
//       <CustomLink to={"Recife"} />
//     </MockHome>
//   );

//   const linkElement = getByText(/recife/i);
//   fireEvent.click(linkElement);
//   const tempSymbol = await findByText(/&deg;C/);
//   expect(tempSymbol).toBeInTheDocument();
// });
