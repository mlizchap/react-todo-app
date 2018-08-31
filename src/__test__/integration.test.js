import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App/App';

let wrapper;
beforeEach(() => {
    wrapper = mount(<App />);
});

describe('form renders to the screen', () => {
    it('app component renders a submit button to the screen', () => {
        const submitBtn = wrapper.find('.form__submitBtn');
        expect(submitBtn.length).toBe(1);
    });
    
    it('app component renders an input to the screen', () => {
        const input = wrapper.find('.form__input');
        expect(input.length).toBe(1);
    });
});

describe('state rendering todos', () => {
    it('when todo state is empty, renders no todos', () => {
        wrapper.setState({ todos: [] });
        const todos = wrapper.find('.list__item');
        expect(todos.length).toBe(0);
    });
    
    it('when there are todos in state, renders those todos', () => {
        wrapper.setState({ todos: [{name: 'thing 1', completed: false}, {name: 'thing 2', completed: false}]});
        const todos = wrapper.find('.list__item');
        expect(todos.length).toBe(2);
    });
})

it('updates state when a new todo is submitted and renders input to screen', () => {
    const userInput = 'abc';
    
    const input = wrapper.find('.form__input');
    input.simulate('change', { target: { value: userInput }});
    
    wrapper.find('.form').simulate('submit');
    const listItem = wrapper.find('.list__item')
    
    expect(wrapper.state().todos[0].name).toBe(userInput);
    expect(listItem.text()).toBe(userInput)
})

describe('todo styling for completion/imcompletion', () => {
    it('crosses out the word when a todo is marked a completed', () => {
        wrapper.setState({ todos: [{name: 'thing 1', completed: false}] })
        const todoItem = wrapper.find('.list__item');
        todoItem.simulate('click');
        expect(wrapper.find('.list__item').get(0).props.style.textDecoration).toBe('line-through');
    });
    it('uncrosses a todo item when a completed item is clicked', () => {
        wrapper.setState({ todos: [{name: 'thing 1', completed: true}] })
        const todoItem = wrapper.find('.list__item');
        todoItem.simulate('click');
        expect(wrapper.find('.list__item').get(0).props.style.textDecoration).toBe('none');

    })
})

describe('error handling for todos submit', () => {
    it('when there is no todo it does not submit', () => {
        const userInput = '';
    
        const input = wrapper.find('.form__input');
        input.simulate('change', { target: { value: userInput }});
        
        wrapper.find('.form').simulate('submit');
        const listItem = wrapper.find('.list__item');
        
        expect(listItem.length).toBe(0);
        
    });
    it('when the todo already exists, it does not submit and an error message text appears', () => {
        wrapper.setState({ todos: [{name: 'x', completed: false }]});
        const userInput = 'x';

        const input = wrapper.find('.form__input');
        input.simulate('change', { target: { value: userInput }});

        wrapper.find('.form').simulate('submit');
        const listItem = wrapper.find('.list__item');

        const errorMessageText = wrapper.find('.errorMessage__text');
        
        expect(listItem.length).toBe(1);
        expect(errorMessageText.length).toBe(1);
    });
    it('when a unique todo item is added, there is no error message', () => {
        wrapper.setState({ todos: [{name: 'x', completed: false }]});
        const userInput = 'abc';

        const input = wrapper.find('.form__input');
        input.simulate('change', { target: { value: userInput }});
        
        wrapper.find('.form').simulate('submit');

        const errorMessageText = wrapper.find('.errorMessage__text');

        expect(errorMessageText.length).toBe(0);

    })
})







