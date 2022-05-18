import {fireEvent, render, screen, act} from '@testing-library/react'
import '@testing-library/jest-dom';
import App from './App'


test('test that home button takes us to "/"', async () => {
    //arrange
    render(<App />)

    //act
   const { getByText} = render(<Navbar Home='Home' />)
   expect(document.querySelector('a').getAttribute('href')).toBe('/')
    



    //assert
})
