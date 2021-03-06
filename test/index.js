import { expect } from 'chai'
import assert from 'assert'
import getLinks from '../src/index'

const url = 'https://github.com/ellerbrock'
const selector = 'a'

describe('Test for npm module get-links', function () {

  it('getLinks should be a function', function () {
    expect(getLinks).to.be.a('function')
  })

  it('getLinks should return false if no params passed', function () {
    expect(getLinks()).to.be.false
  })

  it('getLinks should return false if only 1 param passed', function () {
    expect(getLinks(url)).to.be.false
  })

  it('getLinks should return a promise if required parameters are passed', function () {
    expect(getLinks(url, selector)).to.be.a('promise')
  })

  it('getLinks should be a promise and have then function', function () {
    expect(getLinks(url, selector).then).to.be.a('function')
  })
})
