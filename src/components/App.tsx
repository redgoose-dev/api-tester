import React, { useState } from 'react'
import { $fetch } from 'ohmyfetch'

function App()
{
  const [ address, setAddress ] = useState('http://')
  const [ options, setOptions ] = useState('{}')

  async function onSubmit(e: React.FormEvent): Promise<void>
  {
    e.preventDefault()
    let res = await $fetch(address, {
      method: 'get',
      responseType: 'json',
      retry: 0,
      ...JSON.parse(options),
    });
    console.log(res)
  }

  return (
    <article className="app">
      <h1>API TESTER</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>API 호출 폼</legend>
          <p>
            <label htmlFor="address">URL 주소</label>
          </p>
          <div>
            <textarea
              name="address"
              id="address"
              value={address}
              rows={4}
              cols={60}
              placeholder="URL을 입력해주세요."
              onChange={e => setAddress(e.target.value)}/>
          </div>
          <p>
            <label htmlFor="address">옵션</label>
          </p>
          <div>
            <textarea
              name="options"
              id="options"
              value={options}
              rows={6}
              cols={60}
              placeholder="options 값을 json 형식으로 작성해주세요."
              onChange={e => setOptions(e.target.value)}/>
          </div>
          <button type="submit">CALL URL</button>
        </fieldset>
      </form>
    </article>
  )
}

export default App
