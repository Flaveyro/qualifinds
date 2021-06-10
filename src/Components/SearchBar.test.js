//TDD
//1 - failed test (red)
//2 - minimun to test bein good (green)
//3 - refactoring
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'

import {SearchBar} from './SearchBar'
import {ProductPage} from './ProductPage'
import {Api} from './Api'

it("renders correctly", () => {
    const {queryByTestId, queryByPlaceholderText} = render(<SearchBar/>)
    expect(queryByPlaceholderText('Search')).toBeTruthy()
})

describe("SearchBar", () => {
    it("must display a image", ()=> {
        render(<SearchBar/>)
        expect(screen.queryByText(/element.names/i)).toBeInTheDocument();
    })
})

describe('Api', () => {
    it('must display a title', ()=> {
        render(<Api/>)
        expect(screen.queryByText(/div/i)).toBeInTheDocument();
    })
})

//test jest
describe('ProductPage', () => {
    it('must display a title', () => {
        render(<ProductPage/>)
        expect(screen.queryByText(/product page/i)).toBeInTheDocument();
    })
})