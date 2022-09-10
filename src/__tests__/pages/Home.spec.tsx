import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import Home from "../../pages"

jest.mock('../../hooks/store', () => {
  return {
    useAppSelector(state: any) {
      return [
        {
          amount: 3,
          price: 1200.00
        },
        {
          amount: 1,
          price: 800.00
        }
      ]
    },
    useAppDispatch(callback: any) {
      return {}
    }
  }
})

describe('Home page', () => {
  it('should be able to render correctly', () => {
    const { debug } = render(<Home />)
    debug()
    // expect(getByText('MKS')).toBeInTheDocument()
  })
})
