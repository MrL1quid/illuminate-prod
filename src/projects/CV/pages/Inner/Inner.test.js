import React from "react";
import { Provider } from "react-redux";
import {render} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Inner from "./Inner";
import { configureStore } from "@reduxjs/toolkit";
import skillSlice from "../../redux/slices/skillSlice";
import educationSlice from "../../redux/slices/educationSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import server from "../../services/server";

const store = configureStore({
    reducer: {
        skills: skillSlice,
        education: educationSlice
    },
})

server()
describe("Inner test", () => {

    test("renders an Inner element", () => {
        const { getByText } = render(<Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inner" element={<Inner />} />
                </Routes>
            </Router>
        </Provider>
        )

        const h1 = getByText("Know more")

        expect(h1).toBeInTheDocument()
    })
})