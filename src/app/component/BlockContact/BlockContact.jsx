import React, { useState } from 'react';

function BlockContact({ ...props }) {

  const [dataForm, setDataForm] = useState({ email: '', name: '', comment: '' })

  const handlerForm = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const submitForm = (event) => {
    event.preventDefault()
    alert(JSON.stringify(dataForm, null, 2))
    return false
  }

  return (
    <>
      <div className={`--mbc__description`}>
        <h2>Hello</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde rem sunt praesentium, fuga eveniet beatae, reiciendis vel accusamus omnis itaque! Quam illo modi neque veritatis rem autem eius deleniti!</p>
      </div>


      <div className={`--mds__block-form --bf`}>
        <h3>Hello world</h3>
        <form onSubmit={submitForm} onChange={handlerForm} className={`--bf__input-field`}>
          <input type="text" name="name" value={dataForm.name}></input>
          <input type="text" name="email" value={dataForm.email}></input>
          <input type="text" name="comment" value={dataForm.comment}></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    </>
  )
}

export default BlockContact;