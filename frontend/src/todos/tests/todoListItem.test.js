import { expect } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe('Get border style for date', () => {
    it('return none when date is less than 5 days ago', () => {
        const today = Date.now()
        const recentDate = new Date(Date.now() - 86400000 * 3)

        const expected = 'none'
        const actual = getBorderStyleForDate(recentDate, today)

        expect(actual).to.equal(expected)
    })

    it('returns a border when the date is more than 5 days ago', () =>{
        const today = Date.now()
        const recentDate = new Date(Date.now() - 86400000 * 7)

        const expected = '2px solid red'
        const actual = getBorderStyleForDate(recentDate, today)

        expect(actual).to.equal(expected)
    })
})