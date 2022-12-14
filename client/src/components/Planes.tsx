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
              {/* plan 1 */}
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
                    <h3 className='tab_content_left-title'>
                      Principales prestaciones de la cobertura
                    </h3>
                    <ul className='tab_content_list_ul'>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Consultas m??dicas
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Consultas m??dicas sin cargo.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Pr??cticas
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Estudios y pr??cticas de diagn??stico y tratamientos sin
                          cargo.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Internaci??n
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Servicio de internaci??n cl??nica, quir??rgica y terapia
                          intensiva sin cargo en cl??nicas y sanatorios incluidos
                          en nuestra red de prestadores.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Rehabilitaci??n
                        </h3>
                        <p className='tab_content_list_item-description'>
                          40 sesiones por a??o sin cargo de fisiokinesioterapia y
                          fonoaudiolog??a.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Salud mental
                        </h3>
                        <p className='tab_content_list_item-description'>
                          30 sesiones por a??o de consultas psiqui??tricas y
                          psicol??gicas con copago y 30 d??as sin cargo de
                          internaciones psiqui??tricas agudas.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Odontolog??a
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Consultas, odontolog??a general y urgencias sin cargo.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Farmacias
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Descuento en farmacias. Entre 40% y 100% seg??n PMOE.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className='tab_content_list_2'>
                    <h3 className='tab_content_right-title'>
                      Beneficios Exclusivos
                    </h3>
                    <ul className='tab_content_list_ul_2'>
                      <li className='tab_content_list_item_2'>
                        <h3 className='tab_content_list_item-title_2'>
                          Internaci??n en habitaci??n individual
                        </h3>
                        <p className='tab_content_list_item-description_2'>
                          En Sanatorio G??emes
                        </p>
                      </li>
                      <li className='tab_content_list_item_2'>
                        <h3 className='tab_content_list_item-title_2'>
                          Asistencia al viajero
                        </h3>
                        <p className='tab_content_list_item-description_2'>
                          Nacional e internacional.
                        </p>
                      </li>
                      <li className='tab_content_list_item_2'>
                        <h3 className='tab_content_list_item-title_2'>
                          ??pticas
                        </h3>
                        <p className='tab_content_list_item-description_2'>
                          Un par de anteojos por persona y por a??o
                        </p>
                      </li>
                      <li className='tab_content_list_item_2'>
                        <h3 className='tab_content_list_item-title_2'>
                          Pensi??n por acompa??ante
                        </h3>
                        <p className='tab_content_list_item-description_2'>
                          Sin cargo en Sanatorio G??emes en maternidad
                        </p>
                      </li>
                      <li className='tab_content_list_item_2'>
                        <h3 className='tab_content_list_item-title_2'>
                          Salud Odontolog??a
                        </h3>
                        <p className='tab_content_list_item-description_2'>
                          Reintegro de hasta $3000 en perno y corona
                        </p>
                      </li>
                      <li className='tab_content_list_item_2'>
                        <h3 className='tab_content_list_item-title_2'>
                          Tratamiento esclerosante
                        </h3>
                        <p className='tab_content_list_item-description_2'>
                          Hasta 5 sesiones con medicaci??n por persona
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* plan 2 */}
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
                    <h3 className='tab_content_left-title'>
                      Plan exclusivo para uso en el Sanatorio G??emes Principales
                      prestaciones de la cobertura
                    </h3>
                    <ul className='tab_content_list_ul'>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Consultas m??dicas
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Consultas m??dicas con copago. Consultas m??dicas en
                          domicilio con copago. Servicios exclusivo de urgencias
                          y emergencias.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Pr??cticas
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Estudios y pr??cticas de diagn??stico y tratamientos con
                          copago.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Internaci??n
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Servicio de internaci??n cl??nica, quir??rgica y terapia
                          intensiva sin cargo en Sanatorio G??emes.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Salud mental
                        </h3>
                        <p className='tab_content_list_item-description'>
                          30 sesiones por a??o de consultas psiqui??tricas y
                          psicol??gicas con copago y 30 d??as sin cargo de
                          internaciones psiqui??tricas agudas.
                        </p>
                      </li>

                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Odontolog??a
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Consultas, odontolog??a general y urgencias con copago.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Farmacias
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Descuento en farmacias. Entre 40% y 100% seg??n PMOE.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* plan 3 */}
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
                    <h3 className='tab_content_left-title'>
                      Plan exclusivo para uso en el Sanatorio G??emes Principales
                      prestaciones de la cobertura
                    </h3>
                    <ul className='tab_content_list_ul'>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Consultas m??dicas
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Consultas m??dicas con copago. Consultas m??dicas en
                          domicilio con copago. Servicios exclusivo de urgencias
                          y emergencias.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Pr??cticas
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Estudios y pr??cticas de diagn??stico y tratamientos con
                          copago.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Internaci??n
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Servicio de internaci??n cl??nica, quir??rgica y terapia
                          intensiva sin cargo en Sanatorio G??emes.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Salud mental
                        </h3>
                        <p className='tab_content_list_item-description'>
                          30 sesiones por a??o de consultas psiqui??tricas y
                          psicol??gicas con copago y 30 d??as sin cargo de
                          internaciones psiqui??tricas agudas.
                        </p>
                      </li>

                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Odontolog??a
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Consultas, odontolog??a general y urgencias con copago.
                        </p>
                      </li>
                      <li className='tab_content_list_item'>
                        <h3 className='tab_content_list_item-title'>
                          Farmacias
                        </h3>
                        <p className='tab_content_list_item-description'>
                          Descuento en farmacias. Entre 40% y 100% seg??n PMOE.
                        </p>
                      </li>
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
