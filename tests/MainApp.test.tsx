import React from "react"
import {render} from "@testing-library/react-native";
import App from "../App";

test('The input should render with the correct placeholder', () => { 
    const { getByPlaceholderText  } = render(<App />)
    const input = getByPlaceholderText("FOR");

    expect(input.props.placeholder).toBeTruthy();
 })


 test('expecting dropDownPicker ', () => { 

  })