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
              <section className='tab_content'>
                <div className='tab_content_wrapper'>
                    <div className='tab_content_img_container'>
                    <img
                        className='tab_content_img'
                        src='https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                        alt=''
                    />
                    </div>
                    <div className='tab_content_list'>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                    </ul>
                    </div>
                </div>
              </section>
              <section className='tab_content'>
              <div className='tab_content_wrapper'>
                <div className='tab_content_img_container'>
                  <img
                    className='tab_content_img'
                    src='https://images.unsplash.com/photo-1558554142-0b016c857381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWx0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                </div>
                <div className='tab_content_list'>
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                  </ul>
                </div>
              </div>
              </section>
              <section className='tab_content'>
              <div className='tab_content_wrapper'>
                <div className='tab_content_img_container'>
                  <img
                    className='tab_content_img'
                    src='https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                </div>
                <div className='tab_content_list'>
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                  </ul>
                </div>
                </div>
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
