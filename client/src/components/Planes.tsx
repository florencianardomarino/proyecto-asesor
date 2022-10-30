import React, { FC, useState, useEffect } from 'react';
import '../styles/main.scss';

const Planes: FC = (): JSX.Element => {
  const [checked, setChecked] = useState(1);

  useEffect(() => {
    const handleChecked = (checked: number): void => {
      const radio = document.querySelector(`#tab${checked}`);
      radio?.setAttribute('checked', 'true');
    };
    handleChecked(checked);
  }, [checked]);

  return (
    <div className='planes_container general_container'>
      <div className='tabs'>
        <div className='planes_fake_container'>
            <div className='planes_list_container'>
          <input
            type='radio'
            id='tab1'
            name='tab-control'
            onClick={() => setChecked(1)}
          />
          <input
            type='radio'
            id='tab2'
            name='tab-control'
            onClick={() => setChecked(2)}
          />
          <input
            type='radio'
            id='tab3'
            name='tab-control'
            onClick={() => setChecked(3)}
          />
          <input
            type='radio'
            id='tab4'
            name='tab-control'
            onClick={() => setChecked(4)}
          />
            <ul>
              <li title='Features'>
                <label htmlFor='tab1' role='button'>
                  <span>PLAN H 3.0</span>
                </label>
              </li>
              <li title='Delivery Contents'>
                <label htmlFor='tab2' role='button'>
                  <span>PLAN SG 01</span>
                </label>
              </li>
              <li title='Shipping'>
                <label htmlFor='tab3' role='button'>
                  <span>PLAN SG 02</span>
                </label>
              </li>{' '}
              <li title='Returns'>
                <label htmlFor='tab4' className='hidden_option' role='button'>
                  <span>Returns</span>
                </label>
              </li>
            </ul>
            <div className='slider'>
              <div className='indicator'></div>
          </div>
         
          <div className='content'>
            <section>
              <h2>Features</h2>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ea dolorem sequi, quo tempore in eum obcaecati
              atque quibusdam officiis est dolorum minima deleniti ratione
              molestias numquam. Voluptas voluptates quibusdam cum?elit. Ea
              dolorem sequi, quo tempore in eum obcaecati atque quibusdam
              officiis est dolorum minima deleniti ratione molestias numquam.
              Voluptas voluptates quibusdam cum?elit. Ea dolorem sequi, quo
              tempore in eum obcaecati atque quibusdam officiis est dolorum
              minima deleniti ratione molestias numquam. Voluptas voluptates
              quibusdam cum?elit. Ea dolorem sequi, quo tempore in eum obcaecati
              atque quibusdam officiis est dolorum minima deleniti ratione
              molestias numquam. Voluptas voluptates quibusdam cum?elit. Ea
              dolorem sequi, quo tempore in eum obcaecati atque quibusdam
              officiis est dolorum minima deleniti ratione molestias numquam.
              Voluptas voluptates quibusdam cum?
            </section>
            <section>
              <h2>Delivery Contents</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              quas adipisci a accusantium eius ut voluptatibus ad impedit nulla,
              ipsa qui. Quasi temporibus eos commodi aliquid impedit amet,
              similique nulla.
            </section>
            <section>
              <h2>Shipping</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              nemo ducimus eius, magnam error quisquam sunt voluptate labore,
              excepturi numquam! Alias libero optio sed harum debitis! Veniam,
              quia in eum.
            </section>
            <section>
              <h2>Returns</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              dicta vero rerum? Eaque repudiandae architecto libero
              reprehenderit aliquam magnam ratione quidem? Nobis doloribus
              molestiae enim deserunt necessitatibus eaque quidem incidunt.
            </section>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
