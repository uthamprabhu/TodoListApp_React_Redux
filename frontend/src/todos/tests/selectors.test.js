import { expect } from "chai";
import { getCompletedTodos } from '../selectors'

describe('The getCompletedTodo selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [
            {
                text: 'Say hello',
                isCompleted: true,
            },
            {
                text: 'Say goodbye',
                isCompleted: false,
            },
            {
                text: 'cllimb mount everest',
                isCompleted: false,
            }
        ]

        const expected = [{
            text: 'Say hello',
            isCompleted: true
        }]
        
        const actual = getCompletedTodos.resultFunc(fakeTodos)

        expect(actual).to.deep.equal(expected)
    })
})