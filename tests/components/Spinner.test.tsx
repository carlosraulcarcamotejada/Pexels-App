import { render } from "@testing-library/react"
import Spinner from "../../src/components/Spinner"
import React from "react"

describe('Pruebas en <PhotoInfo />', () => { 
    test('debe de hacer match con el snapshot', () => {

       render(<Spinner  />)
     })
 })