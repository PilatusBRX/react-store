import React from 'react';
import Title from '../Title';
export default function Contact() {
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='Contato' />
          <form
            className='mt-5'
            action='https://formspree.io/hellostudiocontato@gmail.com'
            method='POST'
          >
            {/* first */}
            <div className='form-group'>
              <input
                type='text'
                name='firstName'
                className='form-control'
                placeholder='Nome completo'
                required
              />
            </div>
            {/* email */}
            <div className='form-group'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Seu e-mail'
                required
              />
            </div>
            {/* subject */}
            <div className='form-group'>
              <input
                type='text'
                name='subject'
                className='form-control'
                placeholder='Assunto'
                required
              />
            </div>
            {/* message */}
            <div className='form'>
              <textarea
                name='message'
                className='form-control'
                rows='10'
                placeholder='Mensagem'
                required
              />
            </div>
            {/* submit */}
            <div className='form-group mt-3'>
              <input
                type='submit'
                value='Enviar'
                className='form-control  text-white'
                style={{ background: '#e9bc06' }}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
