import { render } from "@testing-library/react"
import Footer from "../../src/components/Footer"
import React from "react"

describe('pruebas en <Footer />', () => { 

    test('debe de hacer match con el snapshot', () => { 

        render(<Footer />)

     })
 })