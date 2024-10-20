import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Contact from "./Contact";

describe("Address tests", ()=> {
    test("renders an Address", ()=> {
        const {getByText} = render(<Contact />)
        const title = getByText('Contact')

        expect(title).toHaveClass("title")
        
    })
})