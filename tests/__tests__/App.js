/* eslint-disable no-undef */
import { render, fireEvent, cleanup } from '@testing-library/vue'
import App from '../../src/App.vue'
import '@testing-library/jest-dom/extend-expect'

// automatically unmount and cleanup DOM after the test is finished.
// afterEach(cleanup)

test('increments value on click', async () => {
    // The render method returns a collection of utilities to query your component.
    const { container, getByText } = render(App)
    const new1 = container.querySelector('p')

    // getByText returns the first matching node for the provided text, and
    // throws an error if no elements match or if more than one match is found.
    getByText('Times clicked: 0')
    expect(new1.textContent).toEqual('Times clicked: 0')

    const button = getByText('increment')

    // Dispatch a native click event to our button element.
    await fireEvent.click(button)
    await fireEvent.click(button)
    await fireEvent.click(button)

    getByText('Times clicked: 3')
})

test('properly handles v-model', async () => {
    const { container, getByLabelText, getByText } = render(App)

    // Asserts initial state.
    getByText('Hi, my name is Setemi')

    // Get the input DOM node by querying the associated label.
    const usernameInput = getByLabelText(/username/i)

    // Updates the <input> value and triggers an `input` event.
    // fireEvent.input() would make the test fail.
    await fireEvent.update(usernameInput, 'Bob')

    getByText('Hi, my name is Bob')
    await fireEvent.update(usernameInput, 'Yemi')
    const para = container.querySelector('div.usingVmodel p')
    expect(para.textContent).toEqual('Hi, my name is Yemi')
})

//handle test for
//vuex
//vue-router
//vee-validate