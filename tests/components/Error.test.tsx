import { render } from "@testing-library/react"
import Error from "../../src/components/Error"
import React from "react"

describe('Pruebas en <Error />', () => { 
    test('debe de hacer match con el snapshot', () => { 

        const message = 'This is an error'
        const {container} = render(<Error message={message} />)
        expect(container).toMatchSnapshot()
     })
 })